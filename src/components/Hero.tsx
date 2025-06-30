
import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                VS
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Vishal S
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
            <MapPin size={20} />
            <span className="text-lg">Full Stack Developer</span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and turning ideas into reality through code. 
            Specialized in modern web technologies and user-centered design.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
            <Download size={20} className="mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" className="px-6 py-3 rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 hover:scale-105">
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="#" className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Github size={24} className="text-gray-700" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Linkedin size={24} className="text-blue-600" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Mail size={24} className="text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
