
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl leading-relaxed text-dark-text dark:text-gray-300">
          Computer Science Engineer with hands-on experience in Java, Spring Boot, REST APIs, and React. Skilled in developing full-stack web and Android applications. Passionate about scalable solutions, AI-powered tools, and continuous learning.
        </p>
      </motion.div>
    </Section>
  );
};

export default About;
