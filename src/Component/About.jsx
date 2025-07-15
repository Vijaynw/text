import React from 'react';
import { motion } from 'framer-motion';

function About() {
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
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="about-header" variants={itemVariants}>
        <h1>About Me</h1>
        <p className="subtitle">
          Passionate about creating meaningful digital experiences
        </p>
      </motion.div>

      <motion.div className="about-content" variants={itemVariants}>
        <div className="about-text">
          <p>
            Hi there! I'm <span className="highlight">Vijay Waghmare</span>, 
            a passionate web developer with over 1.9 years of experience in 
            the web development environment. I specialize in building scalable, 
            user-friendly applications that solve real-world problems.
          </p>
          <p>
            My journey in web development started with a curiosity about how 
            things work on the internet. Since then, I've been constantly 
            learning and adapting to new technologies, always striving to 
            write clean, efficient code that makes a difference.
          </p>
          <p>
            I believe in the power of good design and user experience. 
            Every project I work on is an opportunity to create something 
            that not only functions well but also delights users.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">1.9+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </motion.div>

      <motion.div className="skills-section" variants={itemVariants}>
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>SCSS/Sass</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Libraries & Frameworks</h3>
            <ul className="skill-list">
              <li>React Router</li>
              <li>Redux</li>
              <li>Framer Motion</li>
              <li>Axios</li>
              <li>Material-UI</li>
              <li>Lucide React</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <ul className="skill-list">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>npm/yarn</li>
              <li>Chrome DevTools</li>
              <li>Figma</li>
              <li>SQL Databases</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Currently Learning</h3>
            <ul className="skill-list">
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>GraphQL</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;