'use client';

import { useAuth } from '@/context/AuthContext';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun, LogOut } from 'lucide-react';



export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 py-4 border-b dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow">
      
      <div className="font-bold text-xl">AuthKit</div>

      <div className="flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}

        {user && (
          <button
            onClick={logout}
            className="text-sm px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
          >
            <LogOut size={16} className="inline mr-1" />
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
