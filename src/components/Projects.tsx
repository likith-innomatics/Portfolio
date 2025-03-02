import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  category: 'AI & Machine Learning' | 'Game Development' | 'Web Development' | 'Others';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Tensor AI Club Website',
      description: 'Built an advanced interactive SPA using React.js (TypeScript), Firebase, and React Three Fiber for immersive 3D designs and real-time data management. Integrated animations with Framer Motion, GSAP, and custom particle systems, ensuring smooth, responsive, and visually engaging user experiences. Deployed via Cloudflare and Netlify with modular architecture and efficient state management.',
      image: '/images/tensor.png',
      technologies: ['React.js', 'TypeScript', 'Firebase', 'React Three Fiber', 'Framer Motion', 'GSAP'],
      liveLink: 'https://tensormvjce.pages.dev/',
      githubLink: 'https://github.com/tensormvjce/website2',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Smart Resume Builder',
      description: 'A dynamic resume and cover letter generator that creates professional documents based on user input. Features multiple templates and real-time preview.',
      image: '/images/resume-builder.png',
      technologies: ['React', 'Node.js'],
      liveLink: 'https://pro-resume-builder.netlify.app/',
      githubLink: 'https://github.com/Likith-Yadav/Resume-Builder',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'News Feed',
      description: 'Full-Stack Social News Feed Application developed a modern, Twitter-like app using React.js (TypeScript), Node.js, and Firebase for real-time updates, authentication, and scalable data management. Integrated features like likes, comments, and notifications with a responsive Tailwind CSS design. Ensured code reliability using TypeScript, React Context, and CI/CD deployment pipelines.',
      image: '/images/NewFeed.png',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Firebase', 'Tailwind CSS'],
      liveLink: 'https://news-feed-23u.pages.dev/home',
      githubLink: 'https://github.com/Likith-Yadav/',
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'Minesweeper',
      description: 'A Minesweeper clone built using HTML, CSS, and Tailwind CSS. Features customizable board sizes and timer.',
      image: '/images/minesweeper.png',
      technologies: ['HTML', 'CSS', 'Tailwind CSS'],
      liveLink: 'https://minesweeper-nine-gray.vercel.app/',
      githubLink: 'https://github.com/Likith-Yadav/Minesweeper',
      category: 'Game Development'
    },
    {
      id: 5,
      title: 'Sirius AI Assistant',
      description: 'An AI Assistant that responds to the users voice and finds the data and replies for the user based on what he asks. Used Flask, HTML, CSS, and JS.',
      image: '/images/sirius-ai.png',
      technologies: ['Flask', 'HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://sirius-ai-liard.vercel.app/',
      githubLink: 'https://github.com/Likith-Yadav/Sirius-AI',
      category: 'AI & Machine Learning'
    },
    {
      id: 6,
      title: 'AI-GenZ Image Generator',
      description: 'An AI-powered image generator that creates unique images based on user prompts. Built using OpenAI\'s DALL-E API and Next.js for a seamless user experience.',
      image: '/images/aigenz.png',
      technologies: ['OpenAI DALL-E', 'Next.js'],
      liveLink: 'https://ai-genz.netlify.app/',
      githubLink: 'https://github.com/Likith-Yadav/Ai-Genz',
      category: 'AI & Machine Learning'
    },
    {
      id: 7,
      title: 'Photography Website',
      description: 'A responsive photography website built using Next.js, TypeScript, and Tailwind CSS. Features a modern design and smooth navigation. Did this for my friends photography portfolio.',
      image: '/images/photography.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      liveLink: 'https://photography-portfolio-rho-mocha.vercel.app/',
      githubLink: 'https://github.com/Likith-Yadav/Photography-Portfolio',
      category: 'Web Development'
    },
    {
      id: 8,
      title: 'Real-time Chat Application',
      description: 'A full-stack chat application with room functionality. Users can create or join rooms using unique codes and engage in real-time discussions. Built with the MERN stack and Socket.io.',
      image: '/images/chat-app.png',
      technologies: ['MERN', 'Socket.io'],
      liveLink: '',
      githubLink: 'https://github.com/Likith-Yadav/Chatty',
      category: 'Web Development'
    },
    {
      id: 9,
      title: 'Techfest Management System',
      description: 'A Techfest Management System built using HTML, CSS, and JavaScript. Features user authentication and event management.',
      image: '/images/techfest.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://techfest-nine.vercel.app/',
      githubLink: 'https://github.com/Likith-Yadav/TechFest.github.io',
      category: 'Web Development'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-secondary-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and experience in different areas of development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex p-1 bg-gray-200 dark:bg-secondary-light rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-white dark:bg-secondary text-primary shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('Web Development')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'Web Development' 
                  ? 'bg-white dark:bg-secondary text-primary shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('AI & Machine Learning')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'AI & Machine Learning' 
                  ? 'bg-white dark:bg-secondary text-primary shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary'
              }`}
            >
              AI & Machine Learning
            </button>
            <button
              onClick={() => setFilter('Game Development')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'Game Development' 
                  ? 'bg-white dark:bg-secondary text-primary shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary'
              }`}
            >
              Game Development
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card overflow-hidden project-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 project-overlay flex items-end p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-gray-100 dark:bg-secondary-light text-xs rounded-md text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <Code size={12} className="mr-1 text-primary" />
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline flex items-center"
                  >
                    Live Demo
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline flex items-center"
                  >
                    View Code
                    <Github size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;