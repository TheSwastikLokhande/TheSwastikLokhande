
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const skillsData = {
  "Languages": ["Java", "C++", "C", "JavaScript", "SQL"],
  "Frameworks": ["Spring Boot", "Hibernate", "JSP-Servlet", "React", "REST APIs"],
  "Mobile": ["Android (Java, XML, Firebase)"],
  "Databases": ["MySQL"],
  "Tools": ["Git", "GitHub", "Eclipse", "IntelliJ IDEA", "Android Studio"]
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={category}
            className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-6 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold text-brand-green mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-light-border dark:bg-gray-700 text-dark-text dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
