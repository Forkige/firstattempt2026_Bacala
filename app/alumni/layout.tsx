'use client';

import BottomNavBar from '@/components/BottomNavBar';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AlumniLayout({
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
    { label: 'Home', href: '/alumni/dashboard', icon: '🏠' },
    { label: 'Events', href: '/alumni/events', icon: '📅' },
    { label: 'Giving', href: '/alumni/giving', icon: '❤️' },
    { label: 'Notifications', href: '/alumni/notifications', icon: '🔔' },
    { label: 'Profile', href: '/alumni/profile', icon: '👤' }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {children}
      <BottomNavBar links={navLinks} />
    </div>
  );
}
