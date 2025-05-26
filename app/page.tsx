// app/page.tsx
// main content for site
// This document outlines my portfolio website built with Next.js and React, styled using Tailwind CSS.
// - Hero Section
// - About Section
// - Projects Section
// - Contact Section

import Image from 'next/image';
import { Fragment } from 'react';

export default function HomePage() {
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
            Hello, I&apos;m <span className="block text-indigo-200">Kev, and I dev</span> {/* i had to set it to &apos; to satisfy eslint*/ }
          </h1>
          <p className="text-3xl font-light mb-8">
            I build <span className="font-medium">to learn</span>
          </p>
          <div className="space-x-4">
            <a
              href="#projects"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              What I do
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition duration-300 transform hover:scale-105"
            >
              Say hi
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Tijuana based student-developer who focuses on building and maintaining useful web and mobile apps.
            With expertise in <span className="font-semibold">React, Next.js, and modern CSS frameworks like Tailwind CSS</span>,
            I love making my spontaneous ideas a digital reality. My journey in development started as a child with a curiosity to understand
            how digital (and analog!) products were built. This curiosity kept evolving and lead me into a life I am proud to be living.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Frontend Development</h3>
              <p className="text-gray-700">React, Next.js, TypeScript, JavaScript, HTML5, CSS3</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Styling & Design</h3>
              <p className="text-gray-700">Tailwind CSS, Styled Components, Responsive Design</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Tools &amp; Workflow</h3>
              <p className="text-gray-700">Git, GitHub, VS Code, npm/yarn, Webpack, Babel</p> {/* Corrected: Tools &amp; Workflow in h3 above */}
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Programming Languages</h3>
              <p className="text-gray-700">C++, C, Java, JavaScript, Python, R</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Image src="/project1.jpg" alt="Project 1" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Project Title One</h3>
                <p className="text-gray-700 mb-4">
                  Ribbon: An iOS app to help us become better grocery shoppers.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
                    Live Demo
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-semibold transition duration-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Image src="/project2.jpg" alt="Project 2" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Project Title Two</h3>
                <p className="text-gray-700 mb-4">
                  My Mimi Moment: the Game
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
                    Live Demo
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-semibold transition duration-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <Image src="/project3.jpg" alt="Project 3" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Project Title Three</h3>
                <p className="text-gray-700 mb-4">
                  Data analysis project.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
                    Live Demo
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-semibold transition duration-300">
                    GitHub
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
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Have a question, or a project in mind? Feel free to reach out! *not yet though*
          </p>
          <div className="space-y-6">
            <a
              href="mailto:your.email@example.com" // customize
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-4 5a2 2 0 01-2 2H9a2 2 0 01-2-2m0 0V6a2 2 0 012-2h6a2 2 0 012 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2"></path></svg>
              Email Me
            </a>
            <p className="text-md text-gray-600">or connect on social media:</p>
            <div className="flex justify-center space-x-6 text-gray-700">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8.298 21.037H5.975v-7.148h2.323v7.148zM7.13 12.87c-1.393 0-2.277-.96-2.277-2.179 0-1.22.884-2.176 2.277-2.176 1.393 0 2.277.956 2.277 2.176 0 1.219-.884 2.179-2.277 2.179zm9.034 8.167h-2.327V14.54a1.865 1.865 0 00-1.861-1.86c-1.018 0-1.748.675-1.748 1.86v6.52H9.006v-7.148h2.326v1.077c.307-.565.827-1.378 2.096-1.378 2.502 0 4.394 1.587 4.394 4.966v2.485z" clipRule="evenodd" /></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition duration-300">
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