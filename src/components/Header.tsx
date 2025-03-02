import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  darkMode, 
  toggleDarkMode, 
  mobileMenuOpen, 
  toggleMobileMenu 
}) => {
  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-secondary shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="nav-link-active"
                  className="nav-link text-secondary-dark dark:text-white hover:text-primary dark:hover:text-primary cursor-pointer"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.a
              href="/resume.pdf"
              download
              className="ml-4 btn-outline flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Download size={16} className="mr-2" />
              Resume
            </motion.a>

            {/* Dark/Light Mode Toggle Button */}
            <button 
              onClick={toggleDarkMode} 
              className="ml-4 p-2 rounded-full focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-800" />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-secondary dark:text-white"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-secondary-light"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="nav-link-active"
                className="nav-link block text-secondary-dark dark:text-white hover:text-primary dark:hover:text-primary"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://github.com/user-attachments/files/19039373/resume.pdf"
              download
              className="nav-link block text-primary flex items-center"
              onClick={toggleMobileMenu}
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;