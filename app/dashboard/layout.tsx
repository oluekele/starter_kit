

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="min-h-screen flex flex-col pt-16 lg:pl-64 md:pl-35 pl-20">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar  />
        <main className="flex-1 p-6 min-h-[calc(100vh-4rem)] overflow-y-auto w-full">{children}</main>
      </div>
    </div>
  );
}
