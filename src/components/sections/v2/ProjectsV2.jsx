import React from 'react';
import { ExternalLink, Github, Zap, Smartphone, Globe, Code } from 'lucide-react';

const ProjectsV2 = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order processing.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Redux', 'Chart.js', 'Tailwind CSS', 'REST API'],
      features: ['Real-time Analytics', 'Inventory Management', 'Order Processing', 'User Management'],
      github: 'https://github.com/Vijaynw',
      live: '#',
      category: 'Web App'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'React DnD', 'Firebase', 'Material-UI'],
      features: ['Drag & Drop', 'Team Collaboration', 'Progress Tracking', 'Real-time Updates'],
      github: 'https://github.com/Vijaynw',
      live: '#',
      category: 'Productivity'
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'OpenWeather API', 'Mapbox', 'SCSS', 'PWA'],
      features: ['Location-based Forecast', 'Interactive Maps', 'Weather Analytics', 'Offline Support'],
      github: 'https://github.com/Vijaynw',
      live: '#',
      category: 'Mobile App'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Netlify'],
      features: ['Responsive Design', 'Smooth Animations', 'Contact Form', 'SEO Optimized'],
      github: 'https://github.com/Vijaynw',
      live: '#',
      category: 'Portfolio'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web App': return Globe;
      case 'Mobile App': return Smartphone;
      case 'Portfolio': return Code;
      default: return Zap;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've used to build them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1">
                        <CategoryIcon size={16} className="text-purple-400" />
                        <span className="text-white text-sm">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to see more projects?
              </h3>
              <p className="text-gray-400 mb-6">
                Check out my GitHub for more projects and contributions
              </p>
              <a
                href="https://github.com/Vijaynw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                <Github size={20} />
                <span>View GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsV2;