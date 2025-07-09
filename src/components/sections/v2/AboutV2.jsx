import React from 'react';
import { Code, Heart, Coffee, Zap, Target, Globe } from 'lucide-react';

const AboutV2 = () => {
  const stats = [
    { number: '1.9+', label: 'Years Experience', icon: Target },
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '∞', label: 'Cups of Coffee', icon: Coffee },
    { number: '24/7', label: 'Passion for Code', icon: Heart }
  ];

  const highlights = [
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Working with international teams and clients, bringing diverse perspectives to every project.'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Obsessed with creating fast, efficient, and scalable web applications that users love.'
    },
    {
      icon: Heart,
      title: 'User-Centric Design',
      description: 'Every line of code is written with the end user in mind, ensuring exceptional experiences.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hello World! 👋
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm <span className="text-purple-400 font-semibold">Vijay Waghmare</span>, 
                  a passionate Frontend Engineer with <span className="text-pink-400 font-semibold">1.9+ years</span> of 
                  experience crafting exceptional web experiences. Currently working at 
                  <span className="text-blue-400 font-semibold"> Qualys</span>, where I transform 
                  complex requirements into elegant, user-friendly solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My journey in web development started with curiosity and has evolved into a 
                  deep passion for creating applications that not only look great but also 
                  perform exceptionally well. I believe in writing clean, maintainable code 
                  and staying up-to-date with the latest technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center group-hover:border-purple-500/50 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{highlight.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutV2;