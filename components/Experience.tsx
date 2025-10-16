
import React from 'react';
import Section from './Section';
import TimelineItem from './TimelineItem';

const experiences = [
  {
    role: "Java Full Stack Intern",
    company: "Archer Infotech, Pune",
    duration: "Oct 2025 – Present",
    description: "Working on Spring Boot + React + MySQL applications. Collaborating on real-world full-stack modules with Git version control."
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute top-0 h-full w-0.5 bg-light-border dark:bg-dark-border left-4"></div>
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={index}
            title={exp.role}
            subtitle={exp.company}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
