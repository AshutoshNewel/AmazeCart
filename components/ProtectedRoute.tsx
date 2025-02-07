'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Wait for session to load
    if (!session) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Show a loading spinner
  }

  if (!session) {
    return null; // Or a custom "Access Denied" message
  }

  return <>{children}</>;
}