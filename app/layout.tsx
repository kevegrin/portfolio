// app/layout.tsx
// This file defines the root layout for the entire application,
// including global styles, metadata, and shared UI like headers and footers.

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // global tailwind and custom styles

// loads the Inter font from Google Fonts, optimizing for performance
const inter = Inter({ subsets: ['latin'] });

// defines metadata for SEO and social sharing
export const metadata: Metadata = {
  title: 'Your Name - Web Developer Portfolio', // customize with your name
  description: 'A modern web development portfolio built with Next.js and Tailwind CSS.',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Web Developer', 'Frontend Developer', 'Portfolio'],
  authors: [{ name: 'Your Name' }], // customize
  openGraph: {
    title: 'Your Name - Web Developer Portfolio',
    description: 'A modern web development portfolio built with Next.js and Tailwind CSS.',
    url: 'https://yourportfolio.com', // change for deployment
    siteName: 'Your Portfolio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Your Portfolio' }], // remember to add this image
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Web Developer Portfolio',
    description: 'A modern web development portfolio built with Next.js and Tailwind CSS.',
    creator: '@yourhandle', // customize
    images: ['/og-image.jpg'], // remember to add this image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 text-gray-900`}>
        {/* Header component */}
        <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
          <nav className="container mx-auto px-6 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition duration-300">
              Your Name
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition duration-300">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a>
            </div>
            {/* Mobile navigation (optional for MVP, but good for quick future proofing) */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-indigo-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </nav>
        </header>

        {/* Main content area, where page.tsx and other routes will render */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer component */}
        <footer className="bg-gray-800 text-white py-6 text-center text-sm">
          <div className="container mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </footer>
      </body>
    </html>
  );
}