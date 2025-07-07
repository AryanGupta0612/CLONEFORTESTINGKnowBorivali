import React from 'react';
import { MessageSquare, ExternalLink } from 'lucide-react';

function FeedbackSection() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 rounded-full p-3">
          <MessageSquare className="h-6 w-6 text-blue-600" />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Help Us Improve
      </h3>
      
      <p className="text-gray-600 mb-4">
        Have suggestions or feedback? Your input helps us make Know Borivali better for everyone.
      </p>
      
      <button
        onClick={() => {
          // This will be replaced with actual Google Form link later
          alert('Feedback form will be available soon!');
        }}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <ExternalLink className="h-4 w-4" />
        Share Feedback
      </button>
    </div>
  );
}

export default FeedbackSection;