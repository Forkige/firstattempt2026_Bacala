'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { paymentMethods } from '@/data/donations';
import { suggestedDonationAmounts } from '@/data/campaigns';

export default function DonatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const presetAmount = searchParams.get('amount');

  const [amount, setAmount] = useState(presetAmount ? parseInt(presetAmount) : 0);
  const [customAmount, setCustomAmount] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('gcash');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const finalAmount = customAmount ? parseInt(customAmount) : amount;

  const handleDonate = () => {
    if (!finalAmount || !email) {
      alert('Please fill in all fields');
      return;
    }
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4 pb-20">
        <Card className="max-w-md w-full text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your donation of <strong className="text-green-600">₱{finalAmount.toLocaleString()}</strong> has been processed successfully.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left space-y-2">
            <p className="text-sm text-gray-700"><strong>Email:</strong> {email}</p>
            <p className="text-sm text-gray-700"><strong>Amount:</strong> ₱{finalAmount.toLocaleString()}</p>
            <p className="text-sm text-gray-700"><strong>Method:</strong> {paymentMethod.toUpperCase()}</p>
            <p className="text-sm text-gray-700"><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            A receipt has been sent to <strong>{email}</strong>. Your certificate will be available in your vault shortly.
          </p>

          <Button
            onClick={() => router.push('/alumni/dashboard')}
            variant="primary"
            fullWidth
            className="mb-2"
          >
            Back to Dashboard
          </Button>
          <Button
            onClick={() => router.push('/alumni/giving')}
            variant="outline"
            fullWidth
          >
            Explore More Campaigns
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm mb-3 hover:text-blue-100"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold">Complete Your Donation</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4 -mt-4 space-y-6">
        {/* Donation Amount */}
        <Card>
          <h2 className="font-bold text-gray-800 mb-4">Select Amount</h2>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {suggestedDonationAmounts.map(suggested => (
              <button
                key={suggested}
                onClick={() => {
                  setAmount(suggested);
                  setCustomAmount('');
                }}
                className={`p-3 rounded-lg border-2 font-semibold transition-colors ${
                  amount === suggested && !customAmount
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 text-gray-700 hover:border-blue-400'
                }`}
              >
                ₱{suggested.toLocaleString()}
              </button>
            ))}
          </div>

          <Input
            type="number"
            label="Custom Amount"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount(0);
            }}
            icon="₱"
          />
        </Card>

        {/* Email */}
        <Card>
          <Input
            type="email"
            label="Email for Receipt"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            icon="📧"
          />
          <p className="text-sm text-gray-600 mt-2">We'll send your donation receipt and certificate here</p>
        </Card>

        {/* Payment Method */}
        <Card>
          <h2 className="font-bold text-gray-800 mb-4">Payment Method</h2>
          <div className="space-y-3">
            {paymentMethods.map(method => (
              <button
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={`w-full p-4 rounded-lg border-2 flex items-center gap-3 font-medium transition-colors ${
                  paymentMethod === method.id
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 text-gray-700 hover:border-blue-400'
                }`}
              >
                <span className="text-xl">{method.icon}</span>
                <span>{method.name}</span>
              </button>
            ))}
          </div>
        </Card>

        {/* Summary */}
        <Card className="bg-blue-50 border-2 border-blue-200">
          <h2 className="font-bold text-gray-800 mb-4">Donation Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-gray-700">
              <span>Amount:</span>
              <span className="font-semibold">₱{finalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Payment Method:</span>
              <span className="font-semibold capitalize">{paymentMethod}</span>
            </div>
            <div className="flex justify-between text-gray-700 pb-2 border-b">
              <span>Receipt Email:</span>
              <span className="font-semibold text-sm">{email || 'Not provided'}</span>
            </div>
            <div className="flex justify-between text-lg pt-2">
              <span className="font-bold text-gray-800">Total:</span>
              <span className="font-bold text-blue-600">₱{finalAmount.toLocaleString()}</span>
            </div>
          </div>

          <Button
            onClick={handleDonate}
            variant="primary"
            fullWidth
            size="lg"
            disabled={!finalAmount || !email}
          >
            Complete Donation
          </Button>
        </Card>

        <div className="pb-4" />
      </div>
    </div>
  );
}
