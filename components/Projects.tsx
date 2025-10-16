
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const projects = [
  {
  "title": "EazySchool Web Application",
  "description": "A comprehensive school management web application built with Spring Boot, featuring holiday management, contact messaging, and role-based access control.",
  "technologies": ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security", "Spring Data JPA", "JdbcTemplate"],
  "link": "https://github.com/TheSwastikLokhande"
},
  {
    title: "E-Commerce Web App",
    description: "A full-featured e-commerce platform with product listings, user authentication, and payment gateway integration.",
    technologies: ["React", "Spring Boot", "MySQL", "Razorpay"],
    link: "https://github.com/TheSwastikLokhande"
  },
  {
    title: "Daily Expense Tracker App",
    description: "A mobile application to help users track their daily expenses, categorize spending, and view financial summaries.",
    technologies: ["Android", "Firebase"],
    link: "https://github.com/TheSwastikLokhande"
  },
  {
    title: "Bookstore Application",
    description: "A comprehensive bookstore app with features for browsing, searching, and managing book inventories.",
    technologies: ["React", "Spring Boot", "Android"],
    link: "https://github.com/TheSwastikLokhande"
  },
  {
    title: "Private Tuition Admission App",
    description: "An Android app to streamline the admission process for a private tuition center, managing student data and inquiries.",
    technologies: ["Android", "Firebase"],
    link: "https://github.com/TheSwastikLokhande"
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-6 flex flex-col group hover:border-brand-green transition-colors duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-dark-text dark:text-white">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-dark-text dark:text-gray-400 group-hover:text-brand-green transition-colors duration-300">
                    <LinkIcon />
                </a>
            </div>
            <p className="text-dark-text dark:text-gray-400 flex-grow">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-light-border dark:bg-gray-700 text-dark-text dark:text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
