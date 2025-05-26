// app/context/LanguageContext.tsx
// This file defines the React Context for managing the global language state (English or Spanish).

'use client'; // This is a Client Component due to useState and localStorage.

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the type for our language context
interface LanguageContextType {
  language: 'en' | 'es'; // 'en' for English, 'es' for Spanish
  toggleLanguage: () => void; // Function to switch language
}

// Create the context with a default (null) value.
const LanguageContext = createContext<LanguageContextType | null>(null);

// Create a provider component that will wrap our application
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize language state from localStorage or default to 'en'
  const [language, setLanguage] = useState<'en' | 'es'>(() => {
    // This runs only once on initial render
    if (typeof window !== 'undefined') { // Check if window is defined (i.e., not server-side)
      const storedLang = localStorage.getItem('language');
      return (storedLang === 'es') ? 'es' : 'en';
    }
    return 'en'; // Default for server-side render or if no localStorage
  });

  // Update localStorage whenever the language changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  // Function to toggle between 'en' and 'es'
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  // The value provided to consumers of this context
  const contextValue: LanguageContextType = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to easily consume the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};