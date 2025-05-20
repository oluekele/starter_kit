'use client';

import { useState } from 'react';
import { forgotPassword } from '@/services/api';
import PageWrapper from '@/components/PageWrapper';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotPassword(email);
      router.push(`/verify-otp?email=${email}`);
    } catch (err) {
      console.error(err);
      alert('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex justify-center items-center px-4 bg-gray-50 dark:bg-zinc-900">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow w-full max-w-md space-y-4">
          <h1 className="text-xl font-semibold text-center">Forgot Password</h1>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Enter your email to receive a verification code.
          </p>
          <input
            type="email"
            className="w-full p-3 rounded border dark:bg-zinc-700 dark:border-zinc-600"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {loading ? <LoadingSpinner /> : 'Send OTP'}
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}
