import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      } backdrop-blur-xl bg-black/30`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-black/50"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

const NavLinks = ({ mobile = false, setIsMenuOpen = () => {} }) => {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];
  
  return links.map((link) => (
    <motion.a
      key={link}
      href={`#${link.toLowerCase()}`}
      className={`text-gray-300 hover:text-purple-400 transition-colors ${
        mobile ? 'text-lg' : ''
      }`}
      onClick={() => mobile && setIsMenuOpen(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {link}
    </motion.a>
  ));
};

export default Header;