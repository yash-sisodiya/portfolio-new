import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, BookOpen } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: BookOpen, href: '#', label: 'Medium' },
  ];

  return (
    <footer className="py-8 backdrop-blur-lg bg-white/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex space-x-6 mb-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </a>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;