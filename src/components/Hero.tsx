import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Hi, I'm Prakash
              <span className="block text-blue-600">Web Developer</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              A passionate developer focused on creating interactive and user-friendly web experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#projects"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&h=600"
              alt="Professional headshot"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;