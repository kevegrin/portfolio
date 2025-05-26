// app/page.tsx
// main content for site
// This document outlines my portfolio website built with Next.js and React, styled using Tailwind CSS.
// - Hero Section
// - About Section
// - Projects Section
// - Contact Section
'use client'; // to make the language changer work.

import Image from 'next/image';
import { Fragment } from 'react';
import { useLanguage } from './context/LanguageContext'; 

export default function HomePage() {
  const { language } = useLanguage(); // Get the current language from context

  // Centralized content definition for easy language switching.
  // Provides all text variants based on the 'language' state.
  // Avoids redundant JSX and makes content management clear.
  const content = {
    hero: {
      title: {
        en: `Hi, I'm Kev, and I dev`,
        es: `Hola, soy Kevin`,
      },
      subtitle: {
        en: `I build to learn`,
        es: `Construyo para aprender`,
      },
      button1: {
        en: `What I do`,
        es: `Lo que hago`,
      },
      button2: {
        en: `Say hi`,
        es: `Saluda!`,
      },
    },
    about: {
      title: {
        en: `About Me`,
        es: `Sobre Mi`,
      },
      description: {
        en: `Tijuana based student-developer who focuses on building and maintaining useful web and mobile apps. With expertise in React, Next.js, and modern CSS frameworks like Tailwind CSS, I love making my spontaneous ideas a digital reality. My journey in development started as a child with a curiosity to understand how digital (and analog!) products were built. This curiosity kept evolving and lead me into a life I am proud to be living.`,
        es: `Estudiante-desarrollador radicado en Tijuana, enfocado en construir y mantener aplicaciones web y móviles útiles. Con experiencia en React, Next.js y frameworks CSS modernos como Tailwind CSS, me encanta convertir mis ideas espontáneas en una realidad digital. Mi viaje en el desarrollo comenzó de niño con la curiosidad de entender cómo se construían los productos digitales (y analógicos). Esta curiosidad siguió evolucionando y me llevó a una vida de la que estoy orgulloso de estar viviendo.`,
      },
      // Skill category titles
      frontend: { en: `Frontend`, es: `Frontend` },
      styling: { en: `Styling & Design`, es: `Diseño` },
      tools: { en: `Tools & Workflow`, es: `Herramientas y Workflow` },
      languages: { en: `Programming Languages`, es: `Lenguajes de Programación` },
    },
    projects: {
      title: {
        en: `My Projects`,
        es: `Mis Proyectos`,
      },
      project1: {
        title: { en: `Ribbon`, es: `Ribbon` },
        description: { en: `Swift app to help me become a better grocery shopper.`, es: `Aplicacion iOS para ayudarme a hacer el mandado de manera eficiente.` },
        liveDemo: { en: `Demo`, es: `Demo` },
        github: { en: `GitHub`, es: `GitHub` },
      },
      project2: {
        title: { en: `Project Title Two`, es: `Título del Proyecto Dos` },
        description: { en: `My Mimi Moment: the Game`, es: `Mi Momento Mimi: El Juego` },
        liveDemo: { en: `Live Demo`, es: `Demostración en Vivo` },
        github: { en: `GitHub`, es: `GitHub` },
      },
      project3: {
        title: { en: `Project Title Three`, es: `Título del Proyecto Tres` },
        description: { en: `Data analysis project.`, es: `Proyecto de análisis de datos.` },
        liveDemo: { en: `Live Demo`, es: `Demostración en Vivo` },
        github: { en: `GitHub`, es: `GitHub` },
      },
    },
    contact: {
      title: {
        en: `Ping()`,
        es: `Ping()`,
      },
      description: {
        en: `*not yet though*`,
        es: `*aún no*`,
      },
      emailButton: {
        en: `Email Me`,
        es: `Envíame un Correo`,
      },
      socialConnect: {
        en: `or connect on socials:`,
        es: `o conéctate en redes:`,
      },
    }
  };

  return (
    <Fragment>
      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/profile.jpg"
            alt="pellegrin"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-lg mx-auto mb-6"
          />
          <h1 className="text-6xl font-extrabold leading-tight tracking-tighter mb-4">
            {/* Using conditional rendering for the title */}
            {language === 'en' ? content.hero.title.en : content.hero.title.es}
          </h1>
          <p className="text-3xl font-light mb-8">
            {/* Using conditional rendering for the subtitle */}
            {language === 'en' ? content.hero.subtitle.en : content.hero.subtitle.es}
          </p>
          <div className="space-x-4">
            <a
              href="#projects"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              {/* Using conditional rendering for button text */}
              {language === 'en' ? content.hero.button1.en : content.hero.button1.es}
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition duration-300 transform hover:scale-105"
            >
              {/* Using conditional rendering for button text */}
              {language === 'en' ? content.hero.button2.en : content.hero.button2.es}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">{language === 'en' ? content.about.title.en : content.about.title.es}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {language === 'en' ? content.about.description.en : content.about.description.es}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">{language === 'en' ? content.about.frontend.en : content.about.frontend.es}</h3>
              <p className="text-gray-700">React, Next.js, TypeScript, JavaScript, HTML5, CSS3</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">{language === 'en' ? content.about.styling.en : content.about.styling.es}</h3>
              <p className="text-gray-700">Tailwind CSS, Styled Components, Responsive Design</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">{language === 'en' ? content.about.tools.en : content.about.tools.es}</h3>
              <p className="text-gray-700">Git, GitHub, VS Code, npm/yarn, Webpack, Babel</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">{language === 'en' ? content.about.languages.en : content.about.languages.es}</h3>
              <p className="text-gray-700">C++, C, Java, JavaScript, Python, R</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-12">{language === 'en' ? content.projects.title.en : content.projects.title.es}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Image src="/project1.jpg" alt="Project 1" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{language === 'en' ? content.projects.project1.title.en : content.projects.project1.title.es}</h3>
                <p className="text-gray-700 mb-4">
                  {language === 'en' ? content.projects.project1.description.en : content.projects.project1.description.es}
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
                    {language === 'en' ? content.projects.project1.liveDemo.en : content.projects.project1.liveDemo.es}
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-semibold transition duration-300">
                    {language === 'en' ? content.projects.project1.github.en : content.projects.project1.github.es}
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Image src="/project2.jpg" alt="Project 2" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{language === 'en' ? content.projects.project2.title.en : content.projects.project2.title.es}</h3>
                <p className="text-gray-700 mb-4">
                  {language === 'en' ? content.projects.project2.description.en : content.projects.project2.description.es}
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
                    {language === 'en' ? content.projects.project2.liveDemo.en : content.projects.project2.liveDemo.es}
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-semibold transition duration-300">
                    {language === 'en' ? content.projects.project2.github.en : content.projects.project2.github.es}
                  </a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Image src="/project3.jpg" alt="Project 3" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{language === 'en' ? content.projects.project3.title.en : content.projects.project3.title.es}</h3>
                <p className="text-gray-700 mb-4">
                  {language === 'en' ? content.projects.project3.description.en : content.projects.project3.description.es}
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
                    {language === 'en' ? content.projects.project3.liveDemo.en : content.projects.project3.liveDemo.es}
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-semibold transition duration-300">
                    {language === 'en' ? content.projects.project3.github.en : content.projects.project3.github.es}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">{language === 'en' ? content.contact.title.en : content.contact.title.es}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {language === 'en' ? content.contact.description.en : content.contact.description.es}
          </p>
          <div className="space-y-6">
            <a
              href="mailto:your.email@example.com" // customize @TODO-set actual email
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-4 5a2 2 0 01-2 2H9a2 2 0 01-2-2m0 0V6a2 2 0 012-2h6a2 2 0 012 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2"></path></svg>
              {language === 'en' ? content.contact.emailButton.en : content.contact.emailButton.es}
            </a>
            <p className="text-md text-gray-600">{language === 'en' ? content.contact.socialConnect.en : content.contact.socialConnect.es}</p>
            <div className="flex justify-center space-x-6 text-gray-700">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8.298 21.037H5.975v-7.148h2.323v7.148zM7.13 12.87c-1.393 0-2.277-.96-2.277-2.179 0-1.22.884-2.176 2.277-2.176 1.393 0 2.277.956 2.277 2.176 0 1.219-.884 2.179-2.277 2.179zm9.034 8.167h-2.327V14.54a1.865 1.865 0 00-1.861-1.86c-1.018 0-1.748.675-1.748 1.86v6.52H9.006v-7.148h2.326v1.077c.307-.565.827-1.378 2.096-1.378 2.502 0 4.394 1.587 4.394 4.966v2.485z" clipRule="evenodd" /></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/kevegrin" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.293 3.438 9.774 8.207 11.387.6.11.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.337.727-4.043-1.612-4.043-1.612-.547-1.387-1.334-1.758-1.334-1.758-1.09-.744.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.83 2.802 1.3 3.483.993.109-.773.418-1.3.762-1.602-2.665-.304-5.466-1.334-5.466-5.932 0-1.31.468-2.382 1.237-3.22-.124-.304-.537-1.523.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.4 3.003-.404 1.02.004 2.046.138 3.003.404 2.29-1.553 3.298-1.23 3.298-1.23.655 1.653.242 2.872.118 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.922.428.37.818 1.102.818 2.222 0 1.606-.015 2.896-.015 3.284 0 .323.21.69.825.577C20.562 21.774 24 17.293 24 12c0-6.628-5.372-12-12-12z" clipRule="evenodd" /></svg>
                <span className="sr-only">GitHub</span>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}