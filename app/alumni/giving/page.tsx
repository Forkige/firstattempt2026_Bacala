'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { campaigns, suggestedDonationAmounts } from '@/data/campaigns';
import { useRouter } from 'next/navigation';

export default function GivingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Giving & Impact ❤️</h1>
          <p className="text-pink-100">Make a difference in our community</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 -mt-4 space-y-6">
        {/* Featured Campaign */}
        {campaigns[0] && (
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={campaigns[0].image}
              alt={campaigns[0].title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{campaigns[0].title}</h2>
              <p className="text-sm text-pink-100 mb-4">{campaigns[0].description}</p>
              <Button
                onClick={() => router.push(`/alumni/campaign/${campaigns[0].id}`)}
                variant="primary"
                size="md"
                className="w-fit"
              >
                Donate Now →
              </Button>
            </div>
          </div>
        )}

        {/* Quick Donate */}
        <Card className="bg-gradient-to-r from-pink-50 to-red-50">
          <h3 className="font-bold text-gray-800 mb-4">Quick Donate</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {suggestedDonationAmounts.map(amount => (
              <Button
                key={amount}
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => router.push(`/alumni/donate?amount=${amount}`)}
              >
                ₱{amount.toLocaleString()}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => router.push('/alumni/donate')}
            variant="primary"
            fullWidth
          >
            Custom Amount
          </Button>
        </Card>

        {/* All Campaigns */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">All Campaigns</h2>
          <div className="space-y-4">
            {campaigns.map(campaign => (
              <Card
                key={campaign.id}
                className="cursor-pointer hover:shadow-lg"
                onClick={() => router.push(`/alumni/campaign/${campaign.id}`)}
                hoverable
              >
                <div className="flex gap-4">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-24 h-24 rounded object-cover hidden sm:block"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-800">{campaign.title}</h3>
                        <p className="text-sm text-gray-600">{campaign.category}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
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
                    
                    <div className="flex justify-between items-center mt-3 text-sm">
                      <div className="text-gray-600">
                        ₱{campaign.raised.toLocaleString()} / ₱{campaign.goal.toLocaleString()}
                      </div>
                      <div className="text-blue-600 font-semibold">{campaign.donors} donors</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="pb-4" />
      </div>
    </div>
  );
}
