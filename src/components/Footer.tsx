import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <h2 className="text-2xl font-bold gradient-text mb-4">John Doe</h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate Full Stack Developer specializing in building exceptional digital experiences.
              Always eager to learn new technologies and solve complex problems.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Likith-Yadav" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/likithyadavgn" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/gnlikithyadav" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Bangalore</li>
              <li>likithyadavgn@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Likith Yadav. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-primary" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;