import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import profile from "../assets/propic.png";

const techIcons = [
  { icon: <FaReact className="text-cyan-500" />, name: "React" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <FaDatabase className="text-purple-400" />, name: "Mongoose" },
];

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-black opacity-30 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-32 right-32 w-72 h-72 bg-blue-950 opacity-30 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-purple-400 opacity-30 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10 px-4 md:px-0">
          
          {/* Left column - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block px-4 py-1 rounded-full bg-violet-500 bg-opacity-20 border border-violet-400 text-blue-50 text-sm mb-2"
            >
              MERN Stack Developer
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-200"
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">SILPA DAS N</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-300 max-w-lg"
            >
              A passionate developer focused on crafting sleek, scalable, and high-performance web applications with modern technologies.
            </motion.p>
            
            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-5 mt-6"
            >
              {techIcons.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl p-3 bg-gray-800 bg-opacity-50 rounded-lg backdrop-filter backdrop-blur-sm shadow-lg group-hover:shadow-blue-500/20">
                    {tech.icon}
                  </div>
                  <span className="text-xs mt-2 text-gray-300 opacity-80 group-hover:opacity-100">
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
              className="flex gap-4 mt-10"
            >
              <motion.button
                onClick={() => navigate('/projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gradient-to-r from-violet-500 to-violet-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-violet-500/50"
              >
                View Projects
              </motion.button>
              
              <motion.a
                href='../assets/SILPA DAS N.pdf'
                download="Silpa_Das_N_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-transparent border border-gray-400 text-white py-3 px-8 rounded-lg font-medium hover:border-violet-400 inline-block text-center cursor-pointer"
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
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* This is where your photo will go */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur-md"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white border-opacity-20">
                {/* Replace the placeholder with your actual image */}
                <img 
                  src={profile}
                  alt="Silpa Das N"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements around the photo */}
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-blue-500 opacity-70 blur-sm"></div>
              <div className="absolute -bottom-2 -left-4 w-6 h-6 rounded-full bg-purple-500 opacity-70 blur-sm"></div>
              
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
      
      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-sm text-gray-300 flex flex-col items-center"
      >
        <span className="mb-2">Scroll down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Home;