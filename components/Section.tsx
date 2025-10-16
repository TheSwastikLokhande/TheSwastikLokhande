
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-dark-text dark:text-white font-serif">
        {title}
      </h2>
      {children}
    </motion.section>
  );
};

export default Section;
