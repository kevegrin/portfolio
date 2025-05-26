// app/layout.tsx
// This file defines the root layout for the entire application,
// including global styles, metadata, and shared UI like headers and footers.

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // global tailwind and custom styles
// PROPOSED CHANGE: Add imports for new Header and Footer components
// What: Import the new Header component. Functionality: Allows using the modular Header. Optimal: Encapsulates header logic, making layout.tsx cleaner and Header reusable.
import Header from './components/Header';
// What: Import the new Footer component. Functionality: Allows using the modular Footer. Optimal: Encapsulates footer logic, making layout.tsx cleaner and Footer reusable.
import Footer from './components/Footer';

import { LanguageProvider } from './context/LanguageContext'; // import the provider


// loads the Inter font from Google Fonts, optimizing for performance
const inter = Inter({ subsets: ['latin'] });

// defines metadata for SEO and social sharing
export const metadata: Metadata = {
  title: 'pellegrin.xyz',
  description: 'A portfolio and project demo site by Kevin Pellegrin',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Web Developer', 'Frontend Developer', 'Portfolio', 'Interactive', 'Portafolio', 'Interactivo', 'Desarrollo Web', 'Tijuana', 'Mexico'],
  authors: [{ name: 'Kevin Pellegrin' }],
  openGraph: {
    title: 'pellegrin.xyz',
    description: 'A portfolio and project demo site by Kevin Pellegrin.',
    url: 'https://pellegrin.xyz', // change for deployment
    siteName: 'p.xyz',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'og-portfolio' }], // remember to add this image
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pellegrin.xyz',
    description: 'kevin pellegrin- portfolio',
    creator: '@kevegrin', 
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
        {/*
          PROPOSED CHANGE: Replace the inline <header> block with <Header />
          What: The entire inline header JSX is replaced by a single <Header /> component instance.
          Functionality/Appearance: The visual header remains largely the same, but the mobile navigation becomes functional (handled within Header.tsx).
          Optimal: Drastically cleans up layout.tsx, promotes reusability, and centralizes header logic in Header.tsx.
        */}
        <LanguageProvider>
        <Header />
        

        {/* Main content area, where page.tsx and other routes will render */}
        <main className="flex-grow">
          {children}
        </main>

        {/* PROPOSED CHANGE: Replace the inline <footer> block with <Footer />
            What: The entire inline footer JSX is replaced by a single <Footer /> component instance.
            Functionality/Appearance: No change to the visual footer.
            Optimal: Cleans up layout.tsx, promotes reusability, and centralizes footer markup in Footer.tsx. */}
        <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}