'use client';

import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';
import { donationStats, donationHistory } from '@/data/donations';

export default function DonationHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Donation History 💳</h1>
          <p className="text-blue-100">Track your giving journey</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 -mt-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Card className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              ₱{(donationStats.totalDonated / 1000).toFixed(0)}K
            </div>
            <p className="text-xs text-gray-600">Total Donated</p>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {donationStats.numberOfDonations}
            </div>
            <p className="text-xs text-gray-600">Donations</p>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              ₱{(donationStats.averageDonation / 1000).toFixed(1)}K
            </div>
            <p className="text-xs text-gray-600">Avg Donation</p>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {donationStats.certificatesEarned}
            </div>
            <p className="text-xs text-gray-600">Certificates</p>
          </Card>
        </div>

        {/* Donation Chart */}
        <Card>
          <h2 className="font-bold text-gray-800 mb-4">Donation Trend</h2>
          <div className="space-y-3">
            {['Jan', 'Feb', 'Mar', 'Apr'].map((month, idx) => (
              <div key={month}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{month}</span>
                  <span className="text-sm text-gray-600">₱{((idx + 1) * 2000).toLocaleString()}</span>
                </div>
                <ProgressBar current={(idx + 1) * 2000} goal={8000} showPercentage={false} />
              </div>
            ))}
          </div>
        </Card>

        {/* Transaction List */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
          <div className="space-y-3">
            {donationHistory.map(donation => (
              <Card key={donation.id} className="hover:shadow-md">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{donation.campaignName}</h3>
                    <p className="text-sm text-gray-600">{donation.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">₱{donation.amount.toLocaleString()}</p>
                    <p className="text-xs text-green-600 font-semibold">{donation.status}</p>
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
