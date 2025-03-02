import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-secondary-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto font-bold">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4"></div>
              <img 
                src="https://github.com/user-attachments/assets/c570e53d-7860-439b-9a87-b9c1d91ce712" 
                alt="About Me" 
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-2">
              I'm <span className="gradient-text">G N Likith Yadav</span>, a passionate Full Stack Developer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With over 1 years of experience in web development, I specialize in creating responsive, 
              user-friendly applications using modern technologies. My journey in tech began during 
              college when I built my first website, and I've been hooked ever since.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              industry trends. My goal is to create digital experiences that are not only functional 
              but also intuitive and enjoyable to use.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer with expertise in MERN Stack</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">1+ years working in tech companies</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech in Artificial Intelligence and Machine Learning</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Interests</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Photography, Cricket , Reading</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;