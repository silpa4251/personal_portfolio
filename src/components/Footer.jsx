import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', name: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/yourusername', name: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:silpadas4251@gmail.com', name: 'Email' }
  ];
  
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-blue-900/20 py-10">
      <div className="container mx-auto px-6">
        {/* Social links with elegant styling */}
          <div className='flex flex-col justify-center items-center gap-6 mb-8'>
        
        {/* Navigation links with refined styling */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a href="/" className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">Home</a>
          <a href="/about" className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">About</a>
          <a href="/skills" className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">Skills</a>
          <a href="/projects" className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">Projects</a>
          <a href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">Contact</a>
        </div>

        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
              aria-label={link.name}
            >
              <span className="text-2xl">{link.icon}</span>
            </a>
          ))}
        </div>

        </div>
        
        {/* Decorative divider */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
        
        {/* Copyright with elegant typography */}
        <div className="text-center text-slate-400 text-sm">
          <p className="font-light tracking-wide">© {currentYear} <span className="text-blue-300">Silpa das N</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;