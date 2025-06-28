import { useState, useEffect } from 'react';
import { resources as defaultResources, Resource } from '../data/resources';

export function useResources() {
  const [allResources, setAllResources] = useState<Resource[]>([]);

  useEffect(() => {
    // Get community-submitted resources from localStorage
    const communityResources = JSON.parse(localStorage.getItem('community-resources') || '[]');
    
    // Combine default resources with community resources
    const combined = [...defaultResources, ...communityResources];
    setAllResources(combined);
  }, []);

  const refreshResources = () => {
    const communityResources = JSON.parse(localStorage.getItem('community-resources') || '[]');
    const combined = [...defaultResources, ...communityResources];
    setAllResources(combined);
  };

  return { allResources, refreshResources };
}