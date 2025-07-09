import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3', level: 90, color: 'bg-blue-500' },
        { name: 'SQL', level: 75, color: 'bg-green-500' }
      ]
    },
    {
      title: 'Frameworks',
      icon: '⚛️',
      skills: [
        { name: 'React.js', level: 85, color: 'bg-blue-400' },
        { name: 'Next.js', level: 70, color: 'bg-gray-800' }
      ]
    },
    {
      title: 'Libraries & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Redux', level: 80, color: 'bg-purple-600' },
        { name: 'React Router', level: 85, color: 'bg-red-500' },
        { name: 'Bootstrap', level: 90, color: 'bg-purple-500' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
        { name: 'SCSS/Sass', level: 80, color: 'bg-pink-500' }
      ]
    },
    {
      title: 'Development Tools',
      icon: '🔧',
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'bg-gray-700' },
        { name: 'VS Code', level: 90, color: 'bg-blue-600' },
        { name: 'npm/yarn', level: 85, color: 'bg-red-600' },
        { name: 'Webpack', level: 70, color: 'bg-blue-400' }
      ]
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies 🤹
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 inline-block">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🚀 Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">GraphQL</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;