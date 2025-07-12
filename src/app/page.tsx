'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/lib/database';
import { useEffect, useRef, useState } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Portfolio() {
  const [projectsVisible, setProjectsVisible] = useState(false);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-purple-900 to-black'>
      {/* Animated background */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute inset-0 opacity-50'
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['100% 100%', '200% 200%'],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Hero Section - Static Alternative */}
      <section
        id='home'
        className='h-screen w-full relative bg-gradient-to-br from-purple-900 via-purple-800 to-black flex items-center justify-center'
      >
        <div className='flex flex-col items-center gap-2 z-10'>
          <motion.div
            variants={fadeInUp}
            className='w-48 h-48 rounded-full overflow-hidden border-4 border-white/10'
          >
            <Image
              src='/images/profile.png'
              alt='Teslim Abdulwahab'
              width={192}
              height={192}
              className='w-full h-full object-cover'
            />
          </motion.div>
          <h1 className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in'>
            TESIMUNE
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up'>
            Full Stack Developer & Software Engineer
          </p>
          <div className='flex gap-4 justify-center'>
            <a
              href='#projects'
              className='px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105'
            >
              View Projects
            </a>
            <a
              href='/documents/tesimune.pdf'
              download='Tesimune_Resume.pdf'
              className='px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2'
            >
              <Download className='w-4 h-4' />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' ref={projectsRef} className='py-20 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-center text-white mb-16'>
            Featured Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  projectsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Projects project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience'>
        <Experience />
      </section>

      {/* Skills Section */}
      <section id='skills'>
        <Skills />
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-gradient-to-br from-gray-900 to-black'
      >
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-8'>
            Let&#39s Work Together
          </h2>
          <p className='text-xl text-gray-400 mb-12 max-w-2xl mx-auto'>
            I&#39m always interested in new opportunities and exciting projects.
            Let&#39s discuss how we can bring your ideas to life.
          </p>

          <div className='flex flex-col md:flex-row gap-6 justify-center items-center mb-12'>
            <a
              href='mailto:tesimune@gmail.com'
              className='flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105'
            >
              <Mail className='w-5 h-5' />
              Get In Touch
            </a>
            <a
              href='/documents/tesimune.pdf'
              download='Tesimune_Resume.pdf'
              className='px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2'
            >
              <Download className='w-4 h-4' />
              Resume
            </a>
          </div>

          <div className='flex gap-6 justify-center text-white'>
            <a
              href='https://github.com/tesimune'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110'
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://linkedin.com/in/tesimune'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110'
            >
              <Linkedin className='w-6 h-6' />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 bg-black border-t border-gray-800'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()} TESIMUNE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
