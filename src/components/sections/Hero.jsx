import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'react-lottie';
import animationData from '../../lotties/kiss-of-the-heart.json';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Vijay Waghmare</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-8 h-16">
            <TypeAnimation
              sequence={[
                'A passionate Software Developer',
                2000,
                'A Frontend Specialist',
                2000,
                'A React Enthusiast',
                2000,
                'A Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            From India 🇮🇳 | Building amazing web experiences with modern technologies
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Vijaynw"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-narsinh-waghmare-788936182/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vijawaghmare713@gmail.com"
              className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            <span>Explore My Work</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;