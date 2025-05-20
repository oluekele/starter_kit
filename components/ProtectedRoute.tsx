'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  
  const router = useRouter();

  const { user, loading } = useAuth();

useEffect(() => {
  if (!loading && !user) {
    router.push('/login');
  }
}, [loading, user]);

if (loading) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}

if (!user) return null; // Don't render prematurely

return <>{children}</>;

}
