'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import { certificates } from '@/data/certificates';
import { useState } from 'react';

export default function CertificateVaultPage() {
  const [autoShare, setAutoShare] = useState<Set<number>>(new Set([1, 2]));

  const toggleAutoShare = (id: number) => {
    const newSet = new Set(autoShare);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setAutoShare(newSet);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Certificate Vault 🎖️</h1>
          <p className="text-purple-100">Your donation certificates and achievements</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-4 -mt-4 space-y-6">
        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certificates.map(cert => (
            <Card key={cert.id} className="hover:shadow-lg overflow-hidden">
              <div className="space-y-3">
                {/* Certificate Image */}
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.campaign}
                    className="w-full h-48 object-cover rounded"
                  />
                  <div className="absolute top-2 right-2 bg-gold-400 text-gold-900 px-2 py-1 rounded text-xs font-bold">
                    ₱{cert.amount}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-bold text-gray-800 line-clamp-2">{cert.campaign}</h3>
                  <p className="text-sm text-gray-600">{cert.date}</p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button
                    onClick={() => {}}
                    variant="primary"
                    size="sm"
                    fullWidth
                  >
                    ⬇️ Download
                  </Button>

                  {/* Auto-share Toggle */}
                  <button
                    onClick={() => toggleAutoShare(cert.id)}
                    className={`w-full p-2 text-sm font-medium rounded-lg transition-colors ${
                      autoShare.has(cert.id)
                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                        : 'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}
                  >
                    {autoShare.has(cert.id) ? '✓ Auto-sharing on' : '↗️ Auto-share'}
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {certificates.length === 0 && (
          <Card className="text-center py-12">
            <div className="text-4xl mb-3">🎖️</div>
            <p className="text-gray-600 mb-4">No certificates yet</p>
            <p className="text-sm text-gray-500">Make a donation to earn your first certificate!</p>
          </Card>
        )}

        <div className="pb-4" />
      </div>
    </div>
  );
}
