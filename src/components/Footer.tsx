
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Vishal S</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Building the web, one line of code at a time.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" fill="currentColor" /> by Vishal S
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
