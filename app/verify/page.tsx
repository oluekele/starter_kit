// app/(auth)/verify-otp/page.tsx
import VerifyPageClient from '@/components/VerifyOTPForm';
import { Suspense } from 'react';


export default function Page() {
  return (
    <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
      <VerifyPageClient />
    </Suspense>
  );
}
