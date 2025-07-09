import React from 'react';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';

const ExperienceV2 = () => {
  const experiences = [
    {
      company: 'Qualys',
      position: 'Frontend Engineer',
      duration: 'Jan 2022 - Present',
      location: 'India',
      type: 'Full-time',
      description: 'Leading frontend development initiatives for enterprise security solutions.',
      achievements: [
        'Developed and maintained scalable React.js applications serving 1000+ enterprise clients',
        'Implemented responsive UI components reducing development time by 40%',
        'Led data conversion and migration projects for major enterprise clients',
        'Collaborated with UX/UI teams to create intuitive user interfaces',
        'Optimized application performance resulting in 30% faster load times'
      ],
      technologies: ['React.js', 'JavaScript', 'TypeScript', 'Redux', 'Tailwind CSS', 'REST APIs'],
      current: true
    },
    {
      company: 'FIS Global',
      position: 'IT Trainee',
      duration: 'Aug 2021 - Aug 2022',
      location: 'India',
      type: 'Internship',
      description: 'Comprehensive training program focusing on modern web development technologies.',
      achievements: [
        'Completed intensive training in React.js and modern JavaScript frameworks',
        'Built multiple full-stack applications as part of the training curriculum',
        'Participated in code reviews and learned industry best practices',
        'Worked on team projects using Agile development methodologies',
        'Achieved top 10% performance in the training program'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey in frontend development and the impact I've made
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <Building className="w-5 h-5 text-purple-400" />
                            <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                            {exp.current && (
                              <span className="bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-semibold text-purple-400 mb-3">
                            {exp.position}
                          </h4>
                          <p className="text-gray-400 mb-4">{exp.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>

                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-4">Key Achievements</h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-gray-300">
                              <ChevronRight size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceV2;