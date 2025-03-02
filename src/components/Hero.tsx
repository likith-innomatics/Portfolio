import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-0"></div>
      
      {/* Orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-2"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              G N Likith Yadav
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
            >
              <span className="text-white">Full Stack</span>{" "}
              <span className="gradient-text">Developer</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-lg mb-8 max-w-lg"
            >
              I build exceptional digital experiences with modern technologies.
              Passionate about creating intuitive, user-friendly applications that solve real-world problems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="contact" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Get in Touch
                </motion.button>
              </Link>
              
              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline"
                >
                  View My Work
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex mt-8 space-x-4"
            >
              <a href="https://github.com/Likith-Yadav" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/likithyadavgn" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/gnlikithyadav" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full"></div>
              <img 
                src="https://github.com/user-attachments/assets/c570e53d-7860-439b-9a87-b9c1d91ce712" 
                alt="G N Likith Yadav" 
                className="rounded-full w-full h-full object-cover border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
      >
        <Link to="about" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;