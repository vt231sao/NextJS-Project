'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ArticlesMenu() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-4 p-4 bg-gray-100 border-b">
            <Link
                href="/articles/create"
                className={pathname.startsWith('/articles/create') ? 'text-blue-600 font-bold' : 'text-gray-600'}
            >
                Create
            </Link>
            <Link
                href="/articles/favorite"
                className={pathname.startsWith('/articles/favorite') ? 'text-blue-600 font-bold' : 'text-gray-600'}
            >
                Favorite
            </Link>
        </nav>
    );
}