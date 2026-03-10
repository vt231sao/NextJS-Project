'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainMenu() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-4 p-4 bg-gray-100 border-b">
            <Link
                href="/articles"
                className={pathname.startsWith('/articles') ? 'text-blue-600 font-bold' : 'text-gray-600'}
            >
                Articles
            </Link>
            <Link
                href="/profile/settings"
                className={pathname === '/profile/settings' ? 'text-blue-600 font-bold' : 'text-gray-600'}
            >
                Settings
            </Link>
            <Link
                href="/profile/security"
                className={pathname === '/profile/security' ? 'text-blue-600 font-bold' : 'text-gray-600'}
            >
                Security
            </Link>
        </nav>
    );
}