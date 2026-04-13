'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = () => {
    // Basic validation
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = 'Email or ID is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock login - accept any email/password
    // In real app, this would call backend
    setUser({
      id: '12345',
      email: email,
      name: 'John Doe',
      role: 'alumni',
      program: 'Bachelor of Science in Computer Science',
      batch: 2020
    });

    router.push('/alumni/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            🎓
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Alumni Portal</h1>
          <p className="text-gray-600">Supporting our community through giving</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <Input
            type="email"
            label="Email or Student ID"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: '' });
            }}
            error={errors.email}
            required
            icon="📧"
          />

          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: '' });
              }}
              error={errors.password}
              required
              icon="🔒"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[42px] text-gray-600 hover:text-gray-800"
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            onClick={handleLogin}
            fullWidth
            size="lg"
            variant="primary"
          >
            Login
          </Button>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="flex-1 border-t"></div>
            <span>New here?</span>
            <div className="flex-1 border-t"></div>
          </div>

          <Button
            onClick={() => router.push('/sign-up')}
            fullWidth
            size="lg"
            variant="outline"
          >
            Create Account
          </Button>
        </div>

        {/* Demo Info */}
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-sm text-gray-700">
            <strong>Demo:</strong> Use any email and password to login
          </p>
        </div>
      </div>
    </div>
  );
}
