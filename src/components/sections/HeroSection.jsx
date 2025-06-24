import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container-custom py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Kazi Mahasin Azim
            <span className="text-2xl md:text-3xl font-normal block mt-2">(Sumon)</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6">Rise Beyond Limits</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-white/20 px-3 py-1 rounded text-sm">ENTREPRENEUR</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">BUSINESS COACH</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">MOTIVATIONAL SPEAKER</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">SOCIAL REFORMER</span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="btn bg-white text-blue-800 hover:bg-gray-100 font-bold"
            >
              Work With Me
            </a>
            <a 
              href="#about" 
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              Learn More <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;