'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Users, ShieldCheck, Activity } from "lucide-react";
import { motion } from 'framer-motion';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardHome() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen px-4 py-10 transition-colors w-full ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full grid gap-6 mx-auto"
        >
          <div className="w-full grid">
            <h1 className="text-3xl font-bold mb-4 ">
            Welcome to your dashboard 🎉
            </h1>
            <p className="">
              This is where you’ll manage your app. Start by adding features, checking analytics, or setting preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <DashboardCard icon={<Users size={20} />} label="Total Users" value="1,254" />
            <DashboardCard icon={<ShieldCheck size={20} />} label="Verified Emails" value="1,122" />
            <DashboardCard icon={<BarChart size={20} />} label="Logins Today" value="230" />
            <DashboardCard icon={<Activity size={20} />} label="Active Sessions" value="89" />
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Actions</h2>
            <div className="flex gap-4 flex-wrap">
              <Button variant="default">Add User</Button>
              <Button variant="secondary">Resend OTP</Button>
              <Button variant="outline">Manage Roles</Button>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-4 w-full">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <div className="border rounded-lg p-4 dark:border-zinc-700">
              <ul className="space-y-2 text-sm">
                <li>✅ John Doe signed up - 5 min ago</li>
                <li>🔐 Email verified for jane@authkit.io</li>
                <li>🚪 Logout event - IP: 192.168.0.2</li>
                <li>🧠 Password reset link sent</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </ProtectedRoute>
  );
}

function DashboardCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <Card className="flex items-center gap-4 p-4 shadow-xl">
      <div className="p-2 rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <CardContent className="p-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}
