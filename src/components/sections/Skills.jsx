import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from '../ui/ProgressBar';
import GlowCard from '../ui/GlowCard';
import Badge from '../ui/Badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'JavaScript', level: 90, color: 'yellow' },
        { name: 'HTML5', level: 95, color: 'red' },
        { name: 'CSS3', level: 90, color: 'blue' },
        { name: 'SQL', level: 75, color: 'green' }
      ]
    },
    {
      title: 'Frameworks',
      icon: '⚛️',
      skills: [
        { name: 'React.js', level: 85, color: 'blue' },
        { name: 'Next.js', level: 70, color: 'purple' }
      ]
    },
    {
      title: 'Libraries & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Redux', level: 80, color: 'purple' },
        { name: 'React Router', level: 85, color: 'red' },
        { name: 'Bootstrap', level: 90, color: 'purple' },
        { name: 'Tailwind CSS', level: 85, color: 'blue' },
        { name: 'SCSS/Sass', level: 80, color: 'pink' }
      ]
    },
    {
      title: 'Development Tools',
      icon: '🔧',
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'purple' },
        { name: 'VS Code', level: 90, color: 'blue' },
        { name: 'npm/yarn', level: 85, color: 'red' },
        { name: 'Webpack', level: 70, color: 'blue' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies 🤹
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing web experiences
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlowCard className="bg-gray-50 p-6" glowColor={index % 2 === 0 ? 'blue' : 'purple'}>
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <ProgressBar 
                    key={skillIndex} 
                    value={skill.level}
                    color={skill.color}
                    showLabel={true}
                    label={skill.name}
                    animated={true}
                  />
                ))}
              </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GlowCard className="bg-blue-50 p-6 inline-block" glowColor="blue">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🚀 Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="primary">TypeScript</Badge>
              <Badge variant="success">Node.js</Badge>
              <Badge variant="purple">GraphQL</Badge>
              <Badge variant="warning">AWS</Badge>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;