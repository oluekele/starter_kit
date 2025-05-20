'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
};

interface AuthContextType{
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  
  useEffect(() => {
  const storedToken = localStorage.getItem('auth-token');
  const storedUser = localStorage.getItem('auth-user');
  if (storedToken && storedUser) {
    setToken(storedToken);
    setUser(JSON.parse(storedUser));
  }
  setLoading(false); // done loading
}, []);

  const login = (user: User, token: string) => {
    setUser(user);
    setToken(token);
    localStorage.setItem('auth-user', JSON.stringify(user));
    localStorage.setItem('auth-token', token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth-user');
    localStorage.removeItem('auth-token');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
