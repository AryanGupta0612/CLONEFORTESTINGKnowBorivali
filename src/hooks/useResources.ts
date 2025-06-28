import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface Resource {
  id: string;
  name: string;
  type: string;
  category: string;
  address: string;
  contact?: string | null;
  email?: string | null;
  website?: string | null;
  description?: string | null;
  rating: number;
  status: 'Open' | 'Closed' | 'Open 24/7';
  hours?: string | null;
  services?: string[] | null;
  is_user_submitted: boolean;
  approved: boolean;
  created_at: string;
  updated_at: string;
}

export function useResources() {
  const [allResources, setAllResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchResources = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setAllResources(data || []);
    } catch (err) {
      console.error('Error fetching resources:', err);
      setError('Failed to load resources');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const refreshResources = () => {
    fetchResources();
  };

  const addResource = async (resourceData: Omit<Resource, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('resources')
        .insert([{
          ...resourceData,
          is_user_submitted: true,
          approved: true // Auto-approve for now
        }])
        .select()
        .single();

      if (error) {
        throw error;
      }

      // Refresh the resources list
      await fetchResources();
      
      return { success: true, data };
    } catch (err) {
      console.error('Error adding resource:', err);
      return { success: false, error: err };
    }
  };

  return { 
    allResources, 
    loading, 
    error, 
    refreshResources, 
    addResource 
  };
}