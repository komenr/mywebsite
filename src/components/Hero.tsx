import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const titles = ['Web Developer', 'Tech Consultant', 'Data Analyst', 'Dedicated Teacher'];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <div className="w-48 h-48 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <img
            src="https://images.unsplash.com/photo-1731966232802-ca34a57a958a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400"
            alt="Reuben Komen"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Reuben Komen
          </span>
        </h1>
        
        <div className="h-8 mb-8">
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in">
            {titles[titleIndex]}
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Guiding You to the Future of Tech
        </p>

        <a
          href="#about"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold 
                     hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300
                     shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
        >
          Discover More
        </a>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;