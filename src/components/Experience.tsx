import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Full Stack Development Intern',
      company: 'Innomatics Research Labs',
      location: 'Virtual',
      period: 'Jan 2025 - Present',
      description: [
        'Gained comprehensive training in front-end and back-end technologies, focusing on creating responsive and scalable web applications.',
        'Collaborated with a team of experts to develop real-world web applications, ensuring functionality, performance.'
      ]
    },
    {
      id: 2,
      role: 'Video Editing/Making Intern',
      company: 'Toriox',
      location: 'Virtual',
      period: 'May 2024 - Aug 2024',
      description: [
        'Collaborated on creating and editing professional video content for promotional and marketing purposes.',
        'Utilized tools such as Canva Pro, Adobe Premiere Pro, and After Effects to produce high-quality visuals.',
        'Worked closely with the design and marketing teams.'
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-white dark:bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-secondary z-10"></div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                  <div className={`card p-6 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <h3 className="text-xl font-bold text-secondary dark:text-white">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 justify-start md:justify-end">
                      <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-left">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for timeline alignment */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;