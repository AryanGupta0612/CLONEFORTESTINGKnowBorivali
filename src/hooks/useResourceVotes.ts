import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function useResourceVotes() {
  const [loading, setLoading] = useState(false);

  const getClientIP = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch {
      return `${navigator.userAgent}-${screen.width}x${screen.height}-${new Date().getTimezoneOffset()}`;
    }
  };

  const voteForResource = async (resourceId: string, voteType: 'helpful' | 'unhelpful') => {
    try {
      setLoading(true);
      const voterIP = await getClientIP();

      // Check if user already voted
      const { data: existingVote } = await supabase
        .from('resource_votes')
        .select('*')
        .eq('resource_id', resourceId)
        .eq('voter_ip', voterIP)
        .single();

      if (existingVote) {
        throw new Error('You have already voted for this resource');
      }

      // Insert vote
      const { error } = await supabase
        .from('resource_votes')
        .insert({
          resource_id: resourceId,
          voter_ip: voterIP,
          vote_type: voteType
        });

      if (error) throw error;

      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const voteForVerification = async (resourceId: string | null, editId: string | null, voteType: 'helpful' | 'unhelpful') => {
    try {
      setLoading(true);
      const voterIP = await getClientIP();

      // Insert verification vote
      const { error } = await supabase
        .from('verification_votes')
        .insert({
          resource_id: resourceId,
          edit_id: editId,
          voter_ip: voterIP,
          vote_type: voteType
        });

      if (error) throw error;

      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return { voteForResource, voteForVerification, loading };
}