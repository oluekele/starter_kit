import Link from 'next/link';


export default function Sidebar() {
  return (
    <aside className={`
        fixed top-16 left-0 lg:w-64 md:w-35 w-25 h-[calc(100vh-4rem)] bg-white dark:bg-zinc-900 border-r dark:border-zinc-700 p-4 transition-transform z-40
        
      `}>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="md:block text-sm md:text-base flex flex-col items-center justify-center w-full">
            📊 <span>Overview</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/profile" className="md:block text-sm md:text-base flex flex-col items-center justify-center w-full">
            👤 <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings" className="md:block text-sm md:text-base flex flex-col items-center justify-center w-full">
            ⚙️ <span>Settings</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
