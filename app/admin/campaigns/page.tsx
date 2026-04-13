'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { campaigns } from '@/data/campaigns';
import { useRouter } from 'next/navigation';

export default function CampaignsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Manage Campaigns 📋</h1>
          <p className="text-purple-100">Create, edit, and monitor your campaigns</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 -mt-4 space-y-6">
        {/* Action Button */}
        <Button
          onClick={() => router.push('/admin/create-campaign')}
          variant="primary"
          size="lg"
          className="w-full md:w-fit"
        >
          ➕ Create New Campaign
        </Button>

        {/* Campaigns List */}
        <div className="space-y-4">
          {campaigns.map(campaign => (
            <Card key={campaign.id} className="hover:shadow-lg">
              <div className="flex gap-4">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-24 h-24 rounded object-cover hidden sm:block"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{campaign.title}</h3>
                      <p className="text-sm text-gray-600">{campaign.category}</p>
                    </div>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      campaign.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : campaign.status === 'Ending Soon'
                        ? 'bg-orange-100 text-orange-800'
                        : campaign.status === 'Paused'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>

                  <ProgressBar current={campaign.raised} goal={campaign.goal} showPercentage={true} />

                  <div className="flex justify-between items-center mt-3 text-sm text-gray-600 mb-3">
                    <span>₱{campaign.raised.toLocaleString()} / ₱{campaign.goal.toLocaleString()}</span>
                    <span>{campaign.donors} donors</span>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Button
                      onClick={() => router.push(`/admin/campaign/${campaign.id}/edit`)}
                      variant="outline"
                      size="sm"
                    >
                      ✏️ Edit
                    </Button>
                    <Button
                      onClick={() => {}}
                      variant="outline"
                      size="sm"
                    >
                      📊 Analytics
                    </Button>
                    <Button
                      onClick={() => {}}
                      variant="outline"
                      size="sm"
                    >
                      ⏸️ Pause
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="pb-4" />
      </div>
    </div>
  );
}
