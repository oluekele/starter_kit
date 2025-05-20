'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signupUser } from '@/services/api';
import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import toast from 'react-hot-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function SignupPage() {
  const [form, setForm] = useState({ firstname: '', lastname: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await signupUser(form);
      toast.success(res.message);
      // router.push(`/verify?email=${form.email}`);
      router.push(`/verify?email=${encodeURIComponent(form.email)}`);
    } catch (err) {
      console.error(err)
      alert('Signup failed');
      
    } finally {
      setLoading(false);
    }
  };

  


  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
          <h1 className="text-xl font-semibold text-center">Create Account</h1>
          {['firstname', 'lastname', 'email', 'password'].map((field) => (
            <input
              key={field}
              name={field}
              type={field === 'password' ? 'password' : 'text'}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              className="w-full p-3 rounded border dark:bg-zinc-700 dark:border-zinc-600"
              onChange={handleChange}
              required
            />
          ))}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            { loading ? <LoadingSpinner /> : 'Sign Up'}
          </button>
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </PageWrapper>
  );
}
