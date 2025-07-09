import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageCircle, Clock } from 'lucide-react';

const ContactV2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    const mailtoLink = `mailto:vijawaghmare713@gmail.com?subject=${formData.subject}&body=Hi Vijay,%0D%0A%0D%0A${formData.message}%0D%0A%0D%0ABest regards,%0D%0A${formData.name}%0D%0A${formData.email}`;
    window.open(mailtoLink);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vijawaghmare713@gmail.com',
      href: 'mailto:vijawaghmare713@gmail.com',
      description: 'Send me an email anytime',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9832879865',
      href: 'tel:+919832879865',
      description: 'Call me during business hours',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Vijay Waghmare',
      href: 'https://www.linkedin.com/in/vijay-narsinh-waghmare-788936182/',
      description: 'Connect with me professionally',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Vijaynw',
      href: 'https://github.com/Vijaynw',
      description: 'Check out my code',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  const quickInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'India 🇮🇳',
      description: 'Available for remote work worldwide'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'I typically respond quickly'
    },
    {
      icon: MessageCircle,
      title: 'Preferred Contact',
      value: 'Email',
      description: 'Best way to reach me'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-400 mb-8">
                  I'm always excited to discuss new opportunities, interesting projects, 
                  or just have a friendly chat about technology and development.
                </p>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : '_self'}
                        rel={method.href.startsWith('http') ? 'noreferrer' : ''}
                        className="group flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                            {method.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{method.value}</p>
                          <p className="text-gray-500 text-xs">{method.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-4">Quick Info</h4>
                <div className="space-y-4">
                  {quickInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <IconComponent className="w-4 h-4 text-purple-400" />
                        <div>
                          <span className="text-white font-medium">{info.title}: </span>
                          <span className="text-gray-400">{info.value}</span>
                          <p className="text-gray-500 text-xs">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2 font-medium transform hover:scale-105 shadow-lg"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>

                <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-purple-300 text-sm text-center">
                    💡 <strong>Pro tip:</strong> Include details about your project timeline, budget, and specific requirements to get a more detailed response!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactV2;