'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { campaigns } from '@/data/campaigns';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  const totalFunds = 3_675_000;
  const studentsSupported = 1245;
  const activeCampaigns = campaigns.filter(c => c.status === 'Active').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Admin Dashboard 📊</h1>
          <p className="text-purple-100">Manage campaigns and donations</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 space-y-6 -mt-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <div>
              <p className="text-blue-100 text-sm mb-2">Total Funds Raised</p>
              <h2 className="text-3xl font-bold">₱{(totalFunds / 1_000_000).toFixed(1)}M</h2>
              <p className="text-xs text-blue-200 mt-2">↑ 12% from last month</p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white">
            <div>
              <p className="text-green-100 text-sm mb-2">Students Supported</p>
              <h2 className="text-3xl font-bold">{studentsSupported.toLocaleString()}</h2>
              <p className="text-xs text-green-200 mt-2">↑ 45 this month</p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white">
            <div>
              <p className="text-orange-100 text-sm mb-2">Active Campaigns</p>
              <h2 className="text-3xl font-bold">{activeCampaigns}</h2>
              <p className="text-xs text-orange-200 mt-2">2 ending soon</p>
            </div>
          </Card>
        </div>

        {/* Campaign Progress */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Campaign Performance</h2>
            <Button
              onClick={() => router.push('/admin/campaigns')}
              variant="outline"
              size="sm"
            >
              View All →
            </Button>
          </div>
          <div className="space-y-4">
            {campaigns.slice(0, 3).map(campaign => (
              <div key={campaign.id}>
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-gray-800 line-clamp-1">{campaign.title}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
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
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₱{campaign.raised.toLocaleString()}</span>
                  <span>{campaign.donors} donors</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => router.push('/admin/create-campaign')}
              variant="primary"
              fullWidth
            >
              ➕ Create Campaign
            </Button>
            <Button
              onClick={() => router.push('/admin/campaigns')}
              variant="primary"
              fullWidth
            >
              📋 Manage Campaigns
            </Button>
          </div>
        </Card>

        {/* Stats Overview */}
        <Card>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Platform Overview</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">8</p>
              <p className="text-xs text-gray-600 mt-1">Total Campaigns</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">1.2K</p>
              <p className="text-xs text-gray-600 mt-1">Donors</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">156</p>
              <p className="text-xs text-gray-600 mt-1">Volunteers</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <p className="text-2xl font-bold text-orange-600">98%</p>
              <p className="text-xs text-gray-600 mt-1">Success Rate</p>
            </div>
          </div>
        </Card>

        <div className="pb-4" />
      </div>
    </div>
  );
}
