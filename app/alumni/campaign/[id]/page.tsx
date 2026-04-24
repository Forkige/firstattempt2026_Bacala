'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { campaigns } from '@/data/campaigns';
import Card from '@/components/Card';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';

export default function CampaignDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const campaignId = parseInt(params.id as string);
  const [imageSrc, setImageSrc] = useState<string>('');

  const campaign = campaigns.find(c => c.id === campaignId);

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <p className="text-gray-600">Campaign not found</p>
          <Button
            onClick={() => router.push('/alumni/giving')}
            variant="primary"
            className="mt-4"
          >
            Back to Giving
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={imageSrc || campaign.image}
          alt={campaign.title}
          className="w-full h-64 object-cover"
          onError={() => setImageSrc('/SHS-Perspective.png')}
        />
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl"
        >
          ← Back
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4">
        {/* Campaign Info */}
        <Card className="-mt-8 relative z-10 mb-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{campaign.title}</h1>
                  <p className="text-sm text-gray-600">{campaign.category}</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  campaign.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : campaign.status === 'Ending Soon'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {campaign.status}
                </span>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <ProgressBar current={campaign.raised} goal={campaign.goal} showPercentage={true} />
              <div className="flex justify-between mt-3 text-sm text-gray-600">
                <span>₱{campaign.raised.toLocaleString()} raised</span>
                <span>{campaign.donors} supporters</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-bold text-gray-800 mb-2">About This Campaign</h2>
              <p className="text-gray-700">{campaign.story}</p>
            </div>
          </div>
        </Card>

        {/* Testimonials */}
        {campaign.testimonials && campaign.testimonials.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Impact Stories</h2>
            <div className="space-y-3">
              {campaign.testimonials.map((testimonial, idx) => (
                <Card key={idx}>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      👤
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 mb-2">Class of {testimonial.year}</p>
                      <p className="text-gray-700 italic">"{testimonial.message}"</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Donation Info */}
        <Card className="bg-blue-50 border-2 border-blue-200">
          <h3 className="font-bold text-gray-800 mb-2">Ready to make an impact?</h3>
          <p className="text-sm text-gray-700 mb-4">
            Your donation will directly support {campaign.title.toLowerCase()} and help create lasting change in our community.
          </p>
          <Button
            onClick={() => router.push(`/alumni/campaign/${campaign.id}/donate`)}
            variant="primary"
            fullWidth
            size="lg"
          >
            Donate Now
          </Button>
        </Card>

        <div className="pb-4" />
      </div>
    </div>
  );
}
