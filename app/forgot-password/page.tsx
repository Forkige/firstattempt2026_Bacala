'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center space-y-4">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-800">Check Your Email</h2>
            <p className="text-gray-600">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500">
              Check your inbox and follow the link to reset your password.
            </p>
            <Button
              onClick={() => router.push('/login')}
              fullWidth
              variant="primary"
              size="lg"
            >
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link
            href="/login"
            className="text-blue-600 hover:underline flex items-center gap-2 text-sm font-medium"
          >
            ← Back to Login
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h1>
          <p className="text-gray-600 text-sm mb-4">
            Enter your email or student ID and we'll send you a link to reset your password.
          </p>

          <Input
            type="email"
            label="Email or Student ID"
            placeholder="you@example.com or 202000001"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            icon="📧"
          />

          <Button
            onClick={handleSubmit}
            fullWidth
            size="lg"
            variant="primary"
            disabled={!email}
          >
            Continue
          </Button>
        </div>

        {/* Back to login link */}
        <div className="mt-6 text-center">
          <Link href="/login" className="text-sm text-blue-600 hover:underline">
            Remember your password? Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
