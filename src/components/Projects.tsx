import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DeFi Dashboard',
    description: 'A comprehensive dashboard for tracking DeFi investments and yields across multiple chains.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Web3.js', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'NFT Marketplace',
    description: 'A modern NFT marketplace with minting capabilities and auction features.',
    image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'Solidity', 'IPFS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Cross-Chain Bridge',
    description: 'A secure bridge for transferring assets between different blockchain networks.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Ethereum', 'Polygon'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, inView }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative backdrop-blur-lg bg-white/50 dark:bg-gray-700/50 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl" />
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {project.title}
          </h3>
          <p className={`text-gray-600 dark:text-gray-300 mb-4 transition-all duration-300 ${
            isExpanded ? '' : 'line-clamp-2'
          }`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              {isExpanded ? 'Show less' : 'Learn more'}
            </button>
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;