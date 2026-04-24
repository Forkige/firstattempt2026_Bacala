'use client';

'use client';

import { useState, type FormEvent } from 'react';
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
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) newErrors.email = 'Email or ID is required';
    if (!password.trim()) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setUser({
      id: '12345',
      email,
      name: 'John Doe',
      role: 'alumni',
      program: 'Bachelor of Science in Computer Science',
      batch: 2020,
    });

    await router.replace('/alumni/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden bg-white border-4 border-blue-600 shadow-sm">
            <img
              src="/addu-logo.svg"
              alt="Ateneo de Davao University logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-black mb-2">Alumni Portal</h1>
          <p className="text-black">Supporting our community through giving</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-lg shadow-lg p-6 space-y-4 text-black">
          <Input
            type="email"
            label="Email or Student ID"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((current) => ({ ...current, email: '' }));
            }}
            error={errors.email}
            required
            icon="📧"
          />

          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((current) => ({ ...current, password: '' }));
            }}
            error={errors.password}
            required
            icon="🔒"
          />

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline font-medium">
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" fullWidth size="lg" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>

          <div className="flex items-center gap-2 text-sm text-black">
            <div className="flex-1 border-t" />
            <span>New here?</span>
            <div className="flex-1 border-t" />
          </div>

          <Button type="button" onClick={() => router.push('/sign-up')} fullWidth size="lg" variant="outline">
            Create Account
          </Button>
        </form>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-sm text-black">
            <strong>Demo:</strong> Enter any email and password, then click login.
          </p>
        </div>
      </div>
    </div>
  );
}
