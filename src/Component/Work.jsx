import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="work"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="work-header" variants={itemVariants}>
        <h1>My Work</h1>
        <p className="subtitle">
          A showcase of my professional journey and projects
        </p>
      </motion.div>

      <motion.div className="experience-timeline" variants={itemVariants}>
        <div className="timeline-item">
          <div className="timeline-date">Jan 2022 - Present</div>
          <div className="timeline-content">
            <h3>Implementation & Conversion Analyst</h3>
            <p className="company">Front-end Developer</p>
            <p>
              Leading front-end development initiatives, implementing responsive 
              designs, and optimizing user experiences. Working with modern React 
              ecosystem to build scalable web applications.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Aug 2021 - Aug 2022</div>
          <div className="timeline-content">
            <h3>IT Trainee</h3>
            <p className="company">Web Development</p>
            <p>
              Started my journey in web development, learning fundamental 
              technologies and best practices. Gained hands-on experience 
              with HTML, CSS, JavaScript, and React.js.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div className="projects-section" variants={itemVariants}>
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <span>Portfolio Website</span>
            </div>
            <div className="project-content">
              <h3>Personal Portfolio</h3>
              <p>
                A modern, responsive portfolio website built with React and SCSS. 
                Features smooth animations, clean design, and optimized performance.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">SCSS</span>
                <span className="tech-tag">Framer Motion</span>
                <span className="tech-tag">React Router</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href="https://github.com/Vijaynw" target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <span>E-commerce App</span>
            </div>
            <div className="project-content">
              <h3>E-commerce Platform</h3>
              <p>
                A full-featured e-commerce application with product catalog, 
                shopping cart, and user authentication. Built with modern 
                React patterns and state management.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">Bootstrap</span>
                <span className="tech-tag">Axios</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href="https://github.com/Vijaynw" target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <span>Task Manager</span>
            </div>
            <div className="project-content">
              <h3>Task Management App</h3>
              <p>
                A productivity application for managing tasks and projects. 
                Features drag-and-drop functionality, real-time updates, 
                and intuitive user interface.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Material-UI</span>
                <span className="tech-tag">Local Storage</span>
                <span className="tech-tag">CSS Grid</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href="https://github.com/Vijaynw" target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Work;