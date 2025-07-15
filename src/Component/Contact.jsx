import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, Github } from 'lucide-react';

function Contact() {
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
      className="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="contact-content" variants={itemVariants}>
        <motion.h1 variants={itemVariants}>Let's Connect</motion.h1>
        
        <motion.p className="subtitle" variants={itemVariants}>
          I'm always interested in new opportunities and collaborations. 
          Let's discuss how we can work together.
        </motion.p>

        <motion.div className="contact-links" variants={itemVariants}>
          <motion.a 
            href="mailto:vijawaghmare713@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="icon" />
            vijawaghmare713@gmail.com
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/vijay-narsinh-waghmare-788936182/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="icon" />
            LinkedIn Profile
          </motion.a>

          <motion.a 
            href="https://github.com/Vijaynw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="icon" />
            GitHub Profile
          </motion.a>

          <motion.a 
            href="tel:9832879865"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="icon" />
            +91 9832879865
          </motion.a>
        </motion.div>

        <motion.div className="availability" variants={itemVariants}>
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span>Available for new projects</span>
          </div>
          <p>
            Currently open to freelance opportunities and full-time positions. 
            Let's create something amazing together!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;