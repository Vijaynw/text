import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import GlowCard from '../ui/GlowCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:vijawaghmare713@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.open(mailtoLink);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vijawaghmare713@gmail.com',
      href: 'mailto:vijawaghmare713@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9832879865',
      href: 'tel:+919832879865',
      color: 'text-green-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Vijay Waghmare',
      href: 'https://www.linkedin.com/in/vijay-narsinh-waghmare-788936182/',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Vijaynw',
      href: 'https://github.com/Vijaynw',
      color: 'text-gray-800'
    }
  ];

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch 📫
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a friendly chat about technology!
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect!
              </h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of these channels. I typically 
                respond within 24 hours.
              </p>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noreferrer' : ''}
                    className="block"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GlowCard className="p-4 group" glowColor="blue">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-200`}>
                          <IconComponent className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{info.label}</h4>
                          <p className="text-gray-600">{info.value}</p>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowCard className="bg-blue-50 p-6" glowColor="blue">
              <div className="flex items-center space-x-3 mb-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Location</h4>
              </div>
              <p className="text-gray-600">India 🇮🇳</p>
              <p className="text-sm text-gray-500 mt-2">
                Open to remote opportunities worldwide
              </p>
              </GlowCard>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <GlowCard className="p-8" glowColor="purple">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none hover:border-blue-400"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
              >
                <Send size={20} />
                <span>Send Message</span>
              </Button>
            </form>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;