'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { forgotPassword, verifyOtp } from '@/services/api';
import PageWrapper from '@/components/PageWrapper';

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await verifyOtp(email, otp);
      router.push('/login');
    } catch (err) {
      console.error(err)
      alert('OTP verification failed');
    } finally {
      setLoading(false);
    }
  };

  
const handleResendOtp = async () => {
  try {
    setResending(true);
    await forgotPassword(email);
    alert('OTP resent to your email');
  } catch (err) {
    console.error(err);
    alert('Failed to resend OTP');
  } finally {
    setResending(false);
  }
};

  return (
    <PageWrapper>
      <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-zinc-900 px-4">
        <form
          onSubmit={handleVerify}
          className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
          <h1 className="text-xl font-semibold text-center">Verify Email</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Enter OTP sent to {email}</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 rounded border dark:bg-zinc-700 dark:border-zinc-600"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
          <button
            type="button"
            className="text-blue-600 hover:underline text-sm"
            onClick={handleResendOtp}
            disabled={resending}
          >
            {resending ? 'Resending...' : 'Resend OTP'}
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}
