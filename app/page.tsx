'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function WelcomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/login');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 transition-colors px-4">
      <motion.div
        className="text-center max-w-xl bg-white dark:bg-zinc-900 shadow-lg p-10 rounded-2xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Welcome to <span className="text-indigo-600">AuthKit</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Securely manage your authentication and users with ease. Let’s get you started.
        </p>
        <button
          onClick={handleGetStarted}
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </button>
      </motion.div>
    </main>
  );
}
