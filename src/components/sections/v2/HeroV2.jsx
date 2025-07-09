import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const HeroV2 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-4xl text-white font-bold">VW</span>
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Vijay Waghmare
          </span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-20 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Frontend Engineer 💻',
              2000,
              'React Specialist ⚛️',
              2000,
              'UI/UX Enthusiast 🎨',
              2000,
              'Problem Solver 🧩',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          />
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with modern web technologies. 
          Passionate about creating scalable, user-friendly applications that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex space-x-4">
            <a
              href="https://github.com/Vijaynw"
              target="_blank"
              rel="noreferrer"
              className="group p-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} className="group-hover:text-purple-400 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-narsinh-waghmare-788936182/"
              target="_blank"
              rel="noreferrer"
              className="group p-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} className="group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="mailto:vijawaghmare713@gmail.com"
              className="group p-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} className="group-hover:text-red-400 transition-colors duration-300" />
            </a>
          </div>
          
          <a
            href="https://drive.google.com/file/d/162MZt3QjBPz7XVczghNLNOQc1-3rI5Gp/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            <span className="font-medium">Download Resume</span>
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300"
        >
          <span className="text-lg">Discover More</span>
          <ArrowDown size={24} className="animate-bounce group-hover:text-purple-400 transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default HeroV2;