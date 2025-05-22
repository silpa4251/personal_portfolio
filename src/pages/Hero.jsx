import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import profile from "../assets/propic.png";
import resumePDF from "../assets/SILPA DAS N.pdf";
import { Link } from 'react-scroll';

const techIcons = [
  { icon: <FaReact className="text-cyan-600" />, name: "React" },
  { icon: <FaNodeJs className="text-green-700" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="text-blue-500" />, name: "Tailwind CSS" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaDatabase className="text-purple-500" />, name: "Mongoose" },
];

const Hero = () => {
  
  return (
    <section className="mt-16 lg:mt-2 relative min-h-screen overflow-hidden dark:bg-gradient-to-br from-black via-gray-900 to-indigo-950 dark:text-white bg-white text-black flex flex-col justify-center">
      
      {/* Animated background elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 md:w-64 md:h-64 bg-black opacity-30 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-blue-950 opacity-30 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-36 h-36 md:w-56 md:h-56 bg-purple-400 opacity-30 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div> */}

      {/* Content container */}
      <div className="container mx-auto flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left column - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block px-3 py-1 rounded-full bg-violet-500 bg-opacity-20 border border-violet-400 text-blue-100 text-xs md:text-sm mb-2"
            >
              MERN Stack Developer
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-gray-200 leading-tight"
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">SILPA DAS N</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-300 max-w-lg mx-auto md:mx-0"
            >
              A passionate developer focused on crafting sleek, scalable, and high-performance web applications with modern technologies.
            </motion.p>
            
            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-6"
            >
              {techIcons.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-2xl sm:text-3xl p-3 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded-lg backdrop-filter backdrop-blur-sm shadow-lg group-hover:shadow-blue-500/20">
                    {tech.icon}
                  </div>
                  <span className="text-xs mt-2 text-gray-800 dark:text-gray-300 opacity-80 group-hover:opacity-100">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Call to Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8"
            >
              <Link to="projects" smooth={true} duration={500} >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}   
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gradient-to-r from-violet-500 to-violet-600 text-white py-2 px-6 rounded-lg font-medium shadow-lg hover:shadow-violet-500/50 text-sm sm:text-base"
              >
                View Projects
              </motion.button>
            </Link>
              
              <motion.a
                href={resumePDF}
                download="Silpa_Das_N_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="dark:bg-transparent border border-gray-400 text-gray-800 dark:text-white bg-gray-100 py-2 px-6 rounded-lg font-medium hover:border-violet-400 text-sm sm:text-base text-center"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur-md"></div>
              
              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white border-opacity-20">
                <img 
                  src={profile}
                  alt="Silpa Das N"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 opacity-70 blur-sm"></div>
              <div className="absolute -bottom-2 -left-4 w-5 h-5 rounded-full bg-purple-500 opacity-70 blur-sm"></div>

              {/* Animated ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-blue-400 border-opacity-50"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
