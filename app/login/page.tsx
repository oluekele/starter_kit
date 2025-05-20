'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';
import PageWrapper from '@/components/PageWrapper';
import LoadingSpinner from '@/components/LoadingSpinner';
import { loginUser } from '@/services/api';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser, login  } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      setUser(res.user);
      login(res.user, res.token);
      router.push('/dashboard');
    } catch (err) {
      console.error(err)
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-zinc-900 transition-colors">
        <form onSubmit={handleLogin} className="bg-white dark:bg-zinc-400 p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <input
            type="email"
            className="w-full p-3 rounded border  dark:border-zinc-600"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full p-3 rounded border bg-white dark:border-zinc-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : 'Login'}
          </button>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            <Link href="/forgot-password" className="text-red-500 hover:underline">Forgot Password?</Link>
          </p>
        </form>
      </div>
    </PageWrapper>
  );
}
