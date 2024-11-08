import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Layout, Globe, Code2, Database, Server, Smartphone,
  Cpu, Shield, Cloud, Palette, Terminal, Boxes
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    color: 'text-blue-500',
    borderColor: 'border-blue-500',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'text-purple-500',
    borderColor: 'border-purple-500',
    skills: ['React Native', 'Expo', 'Mobile UI/UX', 'App Store Deployment'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'text-green-600',
    borderColor: 'border-green-600',
    skills: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Web3 & Blockchain',
    icon: Database,
    color: 'text-orange-500',
    borderColor: 'border-orange-500',
    skills: ['Solidity', 'Web3.js', 'Smart Contracts', 'DeFi', 'NFTs', 'ERC Standards'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'text-sky-500',
    borderColor: 'border-sky-500',
    skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Tools & Others',
    icon: Terminal,
    color: 'text-indigo-500',
    borderColor: 'border-indigo-500',
    skills: ['Git', 'Testing', 'Agile', 'Webpack', 'Vite', 'Performance Optimization'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, index, inView }) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-2 rounded-lg bg-opacity-10 ${category.color.replace('text', 'bg')}`}>
            <Icon className={`w-6 h-6 ${category.color}`} />
          </div>
          <h3 className="text-xl font-semibold">{category.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-3 py-1 rounded-full text-sm border ${category.borderColor} ${category.color} bg-opacity-10 ${category.color.replace('text', 'bg')} hover:bg-opacity-20 transition-all duration-300 cursor-default`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;