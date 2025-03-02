import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 92, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 88, category: 'backend' },
    { name: 'Express', level: 85, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'backend' },
    { name: 'SQL', level: 75, category: 'backend' },
    { name: 'GraphQL', level: 70, category: 'backend' },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'AWS', level: 70, category: 'tools' },
    { name: 'Figma', level: 80, category: 'tools' },
    { name: 'Jest', level: 78, category: 'tools' },
  ];

  const SkillBar: React.FC<{ skill: Skill, index: number }> = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-6"
      >
        <div className="flex justify-between mb-1">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            className="skill-progress"
          ></motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section bg-white dark:bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are my technical skills and proficiency levels in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6"
          >
            <h3 className="text-xl font-bold mb-8 gradient-text">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card p-6"
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="card p-6"
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Tools & Technologies</h3>
            {toolsSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;