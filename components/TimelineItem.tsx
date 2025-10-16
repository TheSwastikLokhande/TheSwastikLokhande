
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, duration, description }) => {
  return (
    <motion.div 
      className="relative pl-12 mb-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-brand-green border-4 border-light-bg dark:border-dark-bg transform -translate-x-1/2"></div>
      <p className="text-sm text-dark-text dark:text-gray-400 mb-1">{duration}</p>
      <h3 className="text-xl font-bold text-dark-text dark:text-white">{title}</h3>
      <h4 className="text-lg font-semibold text-dark-text dark:text-gray-300 mb-2">{subtitle}</h4>
      {description && <p className="text-dark-text dark:text-gray-400">{description}</p>}
    </motion.div>
  );
};

export default TimelineItem;
