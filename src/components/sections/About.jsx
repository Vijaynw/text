import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import GlowCard from '../ui/GlowCard';
import Badge from '../ui/Badge';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <GlowCard className="p-6" glowColor="blue">
              <div className="flex items-start space-x-4">
              <User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Hi There! 👋
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Myself <span className="text-blue-600 font-semibold">Vijay</span>, 
                  hope you are doing well! I am a passionate web developer with over 
                  <Badge variant="primary" className="mx-1">1.9 years of experience</Badge> in 
                  Web Development Environment.
                </p>
              </div>
              </div>
            </GlowCard>

            <GlowCard className="p-6" glowColor="purple">
              <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Location & Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Based in <Badge variant="success">India</Badge>, I have a good understanding of the development 
                  cycle for building scalable applications. I specialize in creating 
                  modern, responsive web applications using cutting-edge technologies.
                </p>
              </div>
              </div>
            </GlowCard>

            <GlowCard className="p-6" glowColor="pink">
              <div className="flex items-start space-x-4">
              <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Current Focus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Currently working as a Frontend Engineer at <Badge variant="purple">Qualys</Badge>, where I transform ideas into beautiful, 
                  functional web experiences.
                </p>
              </div>
              </div>
            </GlowCard>

            <motion.div 
              className="pt-6"
              variants={itemVariants}
            >
              <p className="text-gray-600 italic">
                Thanks for visiting! <br />
                <span className="font-semibold">- Vijay</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <GlowCard className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8" glowColor="blue">
              <div className="text-center">
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl text-white font-bold">VW</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Vijay Waghmare
                </h3>
                <Badge variant="primary" size="lg" className="mb-4">
                  Frontend Engineer
                </Badge>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>🎯 1.9+ Years Experience</p>
                  <p>💼 Frontend Engineer at Qualys</p>
                  <p>🌍 Based in India</p>
                  <p>⚡ React & Modern Web Technologies</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;