import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Hi There! 👋
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Myself <span className="text-blue-600 font-semibold">Vijay</span>, 
                  hope you are doing well! I am a passionate web developer with over 
                  <span className="font-semibold"> 1.9 years of experience</span> in 
                  Web Development Environment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Location & Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Based in India, I have a good understanding of the development 
                  cycle for building scalable applications. I specialize in creating 
                  modern, responsive web applications using cutting-edge technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Current Focus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Currently working as a Frontend Engineer at Qualys, where I transform ideas into beautiful, 
                  functional web experiences.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-gray-600 italic">
                Thanks for visiting! <br />
                <span className="font-semibold">- Vijay</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">VW</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Vijay Waghmare
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  Frontend Developer
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>🎯 1.9+ Years Experience</p>
                  <p>💼 Implementation & Conversion Analyst</p>
                  <p>🌍 Based in India</p>
                  <p>⚡ React & Modern Web Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;