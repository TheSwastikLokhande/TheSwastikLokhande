
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import resumePDF from '../src/assets/Resume/Swastik_Lokhande_Resume_9370925394.pdf.pdf';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-black text-dark-text dark:text-white font-serif tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Swastik Lokhande
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-dark-text dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Java Full Stack Developer | Android Developer | Computer Science Engineer
        </motion.p>
        <motion.p
          className="mt-6 text-md md:text-lg text-dark-text dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          “Building scalable web and Android solutions with Java, Spring Boot, and React.”
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
          >
            Projects
          </a>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border-2 border-light-border dark:border-gray-400 text-dark-text dark:text-gray-300 font-bold py-3 px-8 rounded-full hover:bg-light-card dark:hover:bg-gray-700 hover:border-light-border dark:hover:border-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
