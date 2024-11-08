import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Web3 Developer',
    company: 'DeFi Protocol',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: [
      'Led development of smart contracts and frontend integration for a major DeFi protocol',
      'Implemented complex trading features and yield farming mechanisms',
      'Managed a team of 5 developers and improved deployment efficiency by 40%',
      'Introduced automated testing that increased code coverage to 95%'
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Tech Innovators',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: [
      'Built scalable React applications and RESTful APIs serving 1M+ users',
      'Mentored junior developers and implemented CI/CD pipelines',
      'Reduced application load time by 60% through optimization',
      'Led the migration from monolith to microservices architecture'
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions',
    location: 'Austin, TX',
    period: '2018 - 2020',
    description: [
      'Developed responsive web applications using React and TypeScript',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Increased user engagement by 45% through UI/UX improvements',
      'Created reusable component library used across multiple projects'
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
              <Building2 className="w-4 h-4" />
              <span>{experience.company}</span>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <span>{experience.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mt-2 md:mt-0">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
        </div>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;