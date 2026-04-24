'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { campaigns } from '@/data/campaigns';
import { highestDonors, batchLeaderboard } from '@/data/leaderboard';
import { useRouter } from 'next/navigation';

export default function AlumniDashboard() {
  const router = useRouter();
  const totalDonated = 11500;
  const currentMonth = 2500;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 pb-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <img
            src="/UniversitySeal240px.png"
            alt="Ateneo de Davao University seal"
            className="w-20 h-20 object-contain"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-1">Welcome Back, John! 👋</h1>
            <p className="text-blue-100">Your generous support makes a difference</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 space-y-6 -mt-4">
        {/* Donation Summary */}
        <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="space-y-4">
            <div>
              <p className="text-blue-100 text-sm">Total Donated</p>
              <h2 className="text-3xl font-bold">₱{totalDonated.toLocaleString()}</h2>
            </div>
            <div>
              <p className="text-blue-100 text-sm mb-2">This Month</p>
              <ProgressBar current={currentMonth} goal={5000} showPercentage={false} />
              <p className="text-sm text-blue-100 mt-2">₱{currentMonth.toLocaleString()} of ₱5,000 goal</p>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card>
            <div className="text-center">
              <div className="text-2xl text-black mb-2">5</div>
              <p className="text-sm text-gray-600">Donations</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-2xl text-black mb-2">₱8.9M</div>
              <p className="text-sm text-gray-600">Collective Impact</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-2xl text-black mb-2">3</div>
              <p className="text-sm text-gray-600">Campaigns Supported</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-2xl text-black mb-2">🥇</div>
              <p className="text-sm text-gray-600">Top Supporter</p>
            </div>
          </Card>
        </div>

        {/* Active Campaigns */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Featured Campaigns</h2>
            <Button
              onClick={() => router.push('/alumni/giving')}
              variant="outline"
              size="sm"
            >
              View All →
            </Button>
          </div>
          <div className="space-y-3">
            {campaigns.slice(0, 2).map(campaign => (
              <Card key={campaign.id} className="cursor-pointer hover:shadow-lg" hoverable onClick={() => router.push(`/alumni/campaign/${campaign.id}`)}>
                <div className="flex gap-4">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-800">{campaign.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        campaign.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : campaign.status === 'Ending Soon'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    <ProgressBar current={campaign.raised} goal={campaign.goal} showPercentage={true} />
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                      <span>₱{campaign.raised.toLocaleString()} raised</span>
                      <span>{campaign.donors} donors</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Highest Donors */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Top Contributors</h2>
          <Card>
            <div className="space-y-3">
              {highestDonors.slice(0, 3).map(donor => (
                <div key={donor.rank} className="flex items-center justify-between pb-3 border-b last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {donor.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{donor.name}</p>
                      <p className="text-xs text-gray-600">Batch {donor.batch}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-blue-600">₱{donor.totalDonated.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Batch Stats */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Batch Rank</h2>
          <Card>
            {batchLeaderboard.map(batch => {
              const isBatch2020 = batch.batch === 'Batch 2020';
              return (
                <div
                  key={batch.rank}
                  className={`flex items-center justify-between pb-3 border-b last:border-b-0 last:pb-0 ${
                    isBatch2020 ? 'bg-blue-50 -mx-4 px-4 py-2 rounded' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      isBatch2020 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {batch.rank}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{batch.batch}</p>
                      <p className="text-xs text-gray-600">{batch.numberOfDonors} donors</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-700">₱{batch.totalDonations.toLocaleString()}</p>
                </div>
              );
            })}
          </Card>
        </div>

        {/* Recent Updates */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Updates</h2>
          <Card>
            <div className="space-y-3">
              <div className="flex gap-3 pb-3 border-b">
                <div className="text-xl">🎉</div>
                <div>
                  <p className="font-medium text-gray-800">Scholarship Campaign Reached 50%</p>
                  <p className="text-sm text-gray-600">Just now</p>
                </div>
              </div>
              <div className="flex gap-3 pb-3 border-b">
                <div className="text-xl">🎓</div>
                <div>
                  <p className="font-medium text-gray-800">New Student Beneficiary Added</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-xl">🏆</div>
                <div>
                  <p className="font-medium text-gray-800">You Ranked #5 This Month</p>
                  <p className="text-sm text-gray-600">Yesterday</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="pb-4" />
      </div>
    </div>
  );
}
