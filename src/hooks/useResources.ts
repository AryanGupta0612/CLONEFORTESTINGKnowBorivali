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
  verification_status: 'live' | 'pending' | 'rejected';
  helpful_votes: number;
  unhelpful_votes: number;
  verification_votes: number;
  created_at: string;
  updated_at: string;
}

export interface ResourceEdit {
  id: string;
  original_resource_id: string;
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
  verification_status: 'pending' | 'approved' | 'rejected';
  verification_votes: number;
  created_at: string;
  updated_at: string;
}

export function useResources() {
  const [allResources, setAllResources] = useState<Resource[]>([]);
  const [pendingEdits, setPendingEdits] = useState<ResourceEdit[]>([]);
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
        .order('helpful_votes', { ascending: false })
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

  const fetchPendingEdits = async () => {
    try {
      const { data, error } = await supabase
        .from('resource_edits')
        .select('*')
        .eq('verification_status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setPendingEdits(data || []);
    } catch (err) {
      console.error('Error fetching pending edits:', err);
    }
  };

  useEffect(() => {
    fetchResources();
    fetchPendingEdits();
  }, []);

  const refreshResources = () => {
    fetchResources();
    fetchPendingEdits();
  };

  const addResource = async (resourceData: Omit<Resource, 'id' | 'created_at' | 'updated_at' | 'helpful_votes' | 'unhelpful_votes' | 'verification_votes'>) => {
    try {
      const { data, error } = await supabase
        .from('resources')
        .insert([{
          ...resourceData,
          is_user_submitted: true,
          approved: false,
          verification_status: 'pending'
        }])
        .select()
        .single();

      if (error) {
        throw error;
      }

      await fetchResources();
      
      return { success: true, data };
    } catch (err) {
      console.error('Error adding resource:', err);
      return { success: false, error: err };
    }
  };

  const submitResourceEdit = async (resourceId: string, editData: Omit<ResourceEdit, 'id' | 'original_resource_id' | 'verification_status' | 'verification_votes' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('resource_edits')
        .insert([{
          ...editData,
          original_resource_id: resourceId,
          verification_status: 'pending'
        }])
        .select()
        .single();

      if (error) {
        throw error;
      }

      await fetchPendingEdits();
      
      return { success: true, data };
    } catch (err) {
      console.error('Error submitting edit:', err);
      return { success: false, error: err };
    }
  };

  return { 
    allResources, 
    pendingEdits,
    loading, 
    error, 
    refreshResources, 
    addResource,
    submitResourceEdit
  };
}