import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get current visitor count from localStorage
    const currentCount = localStorage.getItem('borivali-visitor-count');
    const count = currentCount ? parseInt(currentCount, 10) : 0;
    
    // Increment visitor count
    const newCount = count + 1;
    localStorage.setItem('borivali-visitor-count', newCount.toString());
    setVisitorCount(newCount);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 border border-gray-200">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Users className="h-4 w-4" />
        <span>Visitors: <span className="font-semibold text-blue-600">{visitorCount.toLocaleString()}</span></span>
      </div>
    </div>
  );
}

export default VisitorCounter;