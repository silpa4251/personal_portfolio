import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/silpa4251', name: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/silpadasn/', name: 'LinkedIn' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/9961158293', name: 'Whatsapp' }
  ];
  
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-blue-900/20 py-10 cursor-pointer">
      <div className="container mx-auto px-6">
        {/* Social links with elegant styling */}
          <div className='flex flex-col justify-center items-center gap-6 mb-8'>
        
        {/* Navigation links with refined styling */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link to="hero" smooth={true} duration={500} className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">Home</Link>
          <Link to="about" smooth={true} duration={500} className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">About</Link>
          <Link to="skills" smooth={true} duration={500} className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="text-slate-300 hover:text-blue-400 transition-colors text-sm tracking-wide uppercase font-medium">Contact</Link>
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