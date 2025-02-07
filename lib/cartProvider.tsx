'use client';

import { CartProvider } from '@/app/cartContext';
import { SessionProvider } from 'next-auth/react';


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>{children}</CartProvider>
    </SessionProvider>
  );
}