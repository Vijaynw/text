import React, { useState } from 'react';
import { Code, Palette, Database, Wrench, TrendingUp } from 'lucide-react';

const SkillsV2 = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90, description: 'Advanced component architecture & hooks' },
        { name: 'JavaScript (ES6+)', level: 88, description: 'Modern JS features & async programming' },
        { name: 'TypeScript', level: 75, description: 'Type-safe development & interfaces' },
        { name: 'Next.js', level: 70, description: 'SSR, SSG & full-stack React framework' },
        { name: 'HTML5 & CSS3', level: 95, description: 'Semantic markup & modern CSS features' }
      ]
    },
    {
      title: 'Styling & Design',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first CSS framework' },
        { name: 'Styled Components', level: 80, description: 'CSS-in-JS styling solutions' },
        { name: 'SCSS/Sass', level: 85, description: 'Advanced CSS preprocessing' },
        { name: 'Bootstrap', level: 90, description: 'Responsive component library' },
        { name: 'Responsive Design', level: 92, description: 'Mobile-first design principles' }
      ]
    },
    {
      title: 'State & Data',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Redux Toolkit', level: 85, description: 'State management & middleware' },
        { name: 'Context API', level: 88, description: 'React state management' },
        { name: 'REST APIs', level: 90, description: 'API integration & data fetching' },
        { name: 'GraphQL', level: 65, description: 'Query language for APIs' },
        { name: 'Axios', level: 85, description: 'HTTP client for API requests' }
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 88, description: 'Version control & collaboration' },
        { name: 'Webpack', level: 75, description: 'Module bundling & optimization' },
        { name: 'Vite', level: 80, description: 'Fast build tool & dev server' },
        { name: 'ESLint & Prettier', level: 85, description: 'Code quality & formatting' },
        { name: 'Jest & Testing Library', level: 70, description: 'Unit & integration testing' }
      ]
    }
  ];

  const learningSkills = [
    { name: 'Node.js', progress: 60, color: 'bg-green-500' },
    { name: 'Docker', progress: 40, color: 'bg-blue-500' },
    { name: 'AWS', progress: 35, color: 'bg-orange-500' },
    { name: 'MongoDB', progress: 50, color: 'bg-green-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="relative mb-16">
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Currently Learning</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {learningSkills.map((skill, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 relative">
                      <div className="absolute inset-0 bg-gray-700 rounded-full"></div>
                      <div
                        className={`absolute inset-0 ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          background: `conic-gradient(${skill.color.replace('bg-', '')} ${skill.progress * 3.6}deg, #374151 0deg)`
                        }}
                      ></div>
                      <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{skill.progress}%</span>
                      </div>
                    </div>
                    <p className="text-gray-300 font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsV2;