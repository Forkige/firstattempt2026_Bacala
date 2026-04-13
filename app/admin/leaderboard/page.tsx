'use client';

import Card from '@/components/Card';
import { batchLeaderboard } from '@/data/leaderboard';

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Batch Leaderboard 🏆</h1>
          <p className="text-purple-100">Alumni donations by batch</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 -mt-4 space-y-6">
        <Card>
          <div className="space-y-3">
            {batchLeaderboard.map(batch => (
              <div key={batch.rank} className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow">
                {/* Rank */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {batch.rank}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">{batch.batch}</h3>
                  <p className="text-sm text-gray-600">{batch.numberOfDonors} alumni donors</p>
                </div>

                {/* Amount */}
                <div className="text-right">
                  <p className="font-bold text-lg text-blue-600">₱{batch.totalDonations.toLocaleString()}</p>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${batch.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Batch Highlight */}
        <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200">
          <div className="text-center space-y-2">
            <div className="text-4xl">🥇</div>
            <h2 className="text-xl font-bold text-gray-800">{batchLeaderboard[0].batch}</h2>
            <p className="text-2xl font-bold text-amber-600">₱{batchLeaderboard[0].totalDonations.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Leading the giving charge!</p>
          </div>
        </Card>

        {/* Stats */}
        <Card>
          <h2 className="font-bold text-gray-800 mb-4">Leaderboard Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-600">Batches Active</p>
              <p className="text-2xl font-bold text-blue-600">{batchLeaderboard.length}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-xs text-gray-600">Total Donors</p>
              <p className="text-2xl font-bold text-green-600">
                {batchLeaderboard.reduce((acc, b) => acc + b.numberOfDonors, 0).toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-gray-600">Total Raised</p>
              <p className="text-2xl font-bold text-purple-600">
                ₱{(batchLeaderboard.reduce((acc, b) => acc + b.totalDonations, 0) / 1_000_000).toFixed(1)}M
              </p>
            </div>
          </div>
        </Card>

        <div className="pb-4" />
      </div>
    </div>
  );
}
