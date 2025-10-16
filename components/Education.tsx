
import React from 'react';
import Section from './Section';
import TimelineItem from './TimelineItem';

const education = [
  {
    degree: "B.Tech (Computer Science)",
    institution: "DACOE, Karad",
    duration: "2022–2025",
    description: ""
  },
  {
    degree: "Diploma (Computer Engineering)",
    institution: "Govt. Polytechnic, Karad",
    duration: "2019–2022",
    description: ""
  }
];

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute top-0 h-full w-0.5 bg-light-border dark:bg-dark-border left-4"></div>
        {education.map((edu, index) => (
          <TimelineItem 
            key={index}
            title={edu.degree}
            subtitle={edu.institution}
            duration={edu.duration}
            description={edu.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Education;
