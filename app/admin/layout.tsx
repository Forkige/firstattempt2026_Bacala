'use client';

import BottomNavBar from '@/components/BottomNavBar';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  const navLinks = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
    { label: 'Campaigns', href: '/admin/campaigns', icon: '📋' },
    { label: 'Create', href: '/admin/create-campaign', icon: '➕' },
    { label: 'Leaderboard', href: '/admin/leaderboard', icon: '🏆' },
    { label: 'Profile', href: '/admin/profile', icon: '👤' }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {children}
      <BottomNavBar links={navLinks} />
    </div>
  );
}
