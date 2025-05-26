// app/components/Header.tsx
// Header component with navigation, mobile-responsive menu.
'use client'; // client-side interactivity (useState) for the mobile menu.

import Link from 'next/link'; // Using Next.js Link for client-side navigation (logo to home).
import { useState } from 'react';

// navigation links for easier management and consistency.
const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  // State to manage the visibility of the mobile menu.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggles the mobile menu open/closed.
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Closes the mobile menu, useful when a link is clicked.
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo/Site title links to homepage using Next.js Link for SPA behavior. */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition duration-300" onClick={closeMobileMenu}>
          pellegrin.xyz
        </Link>

        {/* Desktop Navigation: Mapped from navLinks array. */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a // Standard <a> tags are fine for same-page anchor links.
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button: Toggles the mobile menu. */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen} // For accessibility, indicates if the menu is open.
          >
            {/* Dynamically changes icon based on menu state. */}
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> // Close (X) icon
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> // Hamburger icon
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu: Conditionally rendered based on isMobileMenuOpen state. */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-2 z-40">
          <nav className="flex flex-col items-center space-y-2 px-6 pb-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block w-full text-center text-gray-600 hover:text-indigo-600 py-2 transition duration-300" onClick={closeMobileMenu}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}