'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'ABOUT ME', href: '/about' },
  { id: 'build', label: 'WHAT I BUILD', href: '/build' },
  { id: 'where', label: 'WHERE I SHOW UP', href: '/where' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        {/* Brand - Click vào tự động đóng menu */}
        <Link
          href="/"
          onClick={closeMenu}
          className={`${styles.navBrand} ${
            pathname === '/' ? styles.navBrandActive : ''
          }`}
        >
          NGUYEN VAN TUAN DUNG&#39;S FOLIO
        </Link>

        {/* Nút Toggle Hamburger cho Mobile */}
        <button
          className={`${styles.toggleBtn} ${
            isOpen ? styles.toggleBtnActive : ''
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Danh sách tab bên phải */}
        <div
          className={`${styles.navLinks} ${
            isOpen ? styles.navLinksOpen : ''
          }`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className={`${styles.navLink} ${
                  isActive ? styles.navLinkActive : ''
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};