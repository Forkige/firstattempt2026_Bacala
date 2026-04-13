'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Tabs from '@/components/Tabs';

export default function CreateCampaignPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Education',
    story: '',
    image: '',
    suggestedAmounts: [500, 1000, 2500, 5000],
    customAmountAllowed: true,
    goal: ''
  });

  const handleNext = () => {
    if (step === 1 && (!formData.title || !formData.category || !formData.story)) {
      alert('Please fill in all required fields');
      return;
    }
    if (step === 2 && !formData.goal) {
      alert('Please set a campaign goal');
      return;
    }
    if (step === 1) {
      setStep(2);
    }
  };

  const handlePublish = () => {
    alert('Campaign published successfully!');
    router.push('/admin/campaigns');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Create Campaign ➕</h1>
          <p className="text-purple-100">Step {step} of 2</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4 -mt-4 space-y-6">
        {/* Step Indicator */}
        <div className="flex gap-2 mb-6">
          <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`flex-1 h-2 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`} />
        </div>

        {/* Step 1 - Basic Info */}
        {step === 1 && (
          <Card>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Campaign Details</h2>
            <div className="space-y-4">
              <Input
                label="Campaign Title"
                placeholder="e.g., Education for Underprivileged Youth"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option>Education</option>
                  <option>Infrastructure</option>
                  <option>Research</option>
                  <option>Scholarship</option>
                  <option>Wellness</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Story</label>
                <textarea
                  placeholder="Tell the story behind this campaign..."
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                />
              </div>

              <Input
                label="Image URL"
                placeholder="https://example.com/image.jpg"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </div>

            <Button
              onClick={handleNext}
              variant="primary"
              fullWidth
              size="lg"
              className="mt-6"
            >
              Continue to Step 2 →
            </Button>
          </Card>
        )}

        {/* Step 2 - Goals & Publishing */}
        {step === 2 && (
          <Card>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Campaign Settings</h2>
            <div className="space-y-4">
              <Input
                type="number"
                label="Fundraising Goal (₱)"
                placeholder="e.g., 100000"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                required
              />

              <div>
                <label className="font-medium text-gray-800 mb-3 block">Suggested Donation Amounts</label>
                <div className="grid grid-cols-2 gap-3">
                  {formData.suggestedAmounts.map((amount, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => {
                          const newAmounts = [...formData.suggestedAmounts];
                          newAmounts[idx] = parseInt(e.target.value) || 0;
                          setFormData({ ...formData, suggestedAmounts: newAmounts });
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                      <span className="text-gray-600">₱</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <input
                  type="checkbox"
                  id="customAmount"
                  checked={formData.customAmountAllowed}
                  onChange={(e) => setFormData({ ...formData, customAmountAllowed: e.target.checked })}
                  className="w-5 h-5"
                />
                <label htmlFor="customAmount" className="text-gray-700 font-medium">
                  Allow custom donation amounts
                </label>
              </div>

              {/* Campaign Preview */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold mb-3">Preview:</p>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-bold text-gray-800">{formData.title}</p>
                  <p className="text-sm text-gray-600">{formData.category}</p>
                  <p className="text-xs text-blue-600 mt-2">Goal: ₱{parseInt(formData.goal || '0').toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                fullWidth
                size="lg"
              >
                ← Back
              </Button>
              <Button
                onClick={handlePublish}
                variant="primary"
                fullWidth
                size="lg"
              >
                🚀 Publish Campaign
              </Button>
            </div>
          </Card>
        )}

        <div className="pb-4" />
      </div>
    </div>
  );
}
