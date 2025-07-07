import React from 'react';
import { AlertCircle, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useResources } from '../hooks/useResources';
import { useResourceVotes } from '../hooks/useResourceVotes';

function PendingVerification() {
  const { allResources, pendingEdits } = useResources();
  const { voteForVerification, loading } = useResourceVotes();

  const pendingResources = allResources.filter(r => r.verification_status === 'pending');

  const handleVerificationVote = async (resourceId: string | null, editId: string | null, voteType: 'helpful' | 'unhelpful') => {
    await voteForVerification(resourceId, editId, voteType);
  };

  if (pendingResources.length === 0 && pendingEdits.length === 0) {
    return null;
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="h-5 w-5 text-yellow-600" />
        <h2 className="text-lg font-semibold text-yellow-800">Help Verify New Content</h2>
      </div>
      
      <p className="text-yellow-700 mb-4">
        The community has submitted new resources and edits. Help us verify their accuracy!
      </p>

      <div className="space-y-4">
        {/* Pending Resources */}
        {pendingResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{resource.name}</h3>
                <p className="text-sm text-gray-600">{resource.type} • {resource.address}</p>
                <p className="text-sm text-gray-700 mt-2">{resource.description}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleVerificationVote(resource.id, null, 'helpful')}
                  disabled={loading}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors disabled:opacity-50"
                >
                  <ThumbsUp className="h-4 w-4" />
                  Helpful ({resource.verification_votes})
                </button>
                <button
                  onClick={() => handleVerificationVote(resource.id, null, 'unhelpful')}
                  disabled={loading}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors disabled:opacity-50"
                >
                  <ThumbsDown className="h-4 w-4" />
                  Unhelpful
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Pending Edits */}
        {pendingEdits.map((edit) => (
          <div key={edit.id} className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{edit.name} <span className="text-sm text-blue-600">(Edit)</span></h3>
                <p className="text-sm text-gray-600">{edit.type} • {edit.address}</p>
                <p className="text-sm text-gray-700 mt-2">{edit.description}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleVerificationVote(null, edit.id, 'helpful')}
                  disabled={loading}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors disabled:opacity-50"
                >
                  <ThumbsUp className="h-4 w-4" />
                  Helpful ({edit.verification_votes})
                </button>
                <button
                  onClick={() => handleVerificationVote(null, edit.id, 'unhelpful')}
                  disabled={loading}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors disabled:opacity-50"
                >
                  <ThumbsDown className="h-4 w-4" />
                  Unhelpful
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PendingVerification;