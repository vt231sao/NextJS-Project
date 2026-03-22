'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Menu.module.css';

export default function MainMenu() {
    const pathname = usePathname();

    return (
        <nav className={styles.navContainer}>
            <Link
                href="/articles"
                className={pathname.startsWith('/articles') ? styles.navLinkActive : styles.navLink}
            >
                Articles
            </Link>
            <Link
                href="/profile/settings"
                className={pathname === '/profile/settings' ? styles.navLinkActive : styles.navLink}
            >
                Settings
            </Link>
            <Link
                href="/profile/security"
                className={pathname === '/profile/security' ? styles.navLinkActive : styles.navLink}
            >
                Security
            </Link>
        </nav>
    );
}