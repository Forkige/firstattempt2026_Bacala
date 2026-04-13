'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Link from 'next/link';

export default function RoleSelectionPage() {
  const router = useRouter();

  const handleSelectRole = (role: 'alumni' | 'admin') => {
    // Store selected role in session/context and navigate
    if (role === 'alumni') {
      router.push('/alumni/dashboard');
    } else {
      router.push('/admin/dashboard');
    }
  };

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

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Select Your Role</h1>
          <p className="text-gray-600">Choose how you'd like to access the portal</p>
        </div>

        <div className="space-y-4">
          {/* Alumni Card */}
          <Card
            className="cursor-pointer hover:shadow-xl hover:border-blue-600 border-2 border-transparent"
            onClick={() => handleSelectRole('alumni')}
            hoverable
          >
            <div className="text-center space-y-3">
              <div className="text-5xl">🎓</div>
              <h2 className="text-xl font-bold text-gray-800">Alumni</h2>
              <p className="text-gray-600 text-sm">
                Donate to campaigns, attend events, and support the community
              </p>
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => {
                  handleSelectRole('alumni');
                }}
              >
                Continue as Alumni
              </Button>
            </div>
          </Card>

          {/* Admin Card */}
          <Card
            className="cursor-pointer hover:shadow-xl hover:border-blue-600 border-2 border-transparent"
            onClick={() => handleSelectRole('admin')}
            hoverable
          >
            <div className="text-center space-y-3">
              <div className="text-5xl">⚙️</div>
              <h2 className="text-xl font-bold text-gray-800">Admin</h2>
              <p className="text-gray-600 text-sm">
                Manage campaigns, view analytics, and oversee the platform
              </p>
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => {
                  handleSelectRole('admin');
                }}
              >
                Continue as Admin
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
