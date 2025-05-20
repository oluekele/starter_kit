import VerifyPageClient from '@/components/VerifyOTPForm';
import { Suspense } from 'react';


export default function VerifyPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyPageClient />
    </Suspense>
  );
}