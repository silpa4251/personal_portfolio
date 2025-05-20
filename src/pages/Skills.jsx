import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaDatabase, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiTypescript, SiMongodb, SiExpress, SiAwsamplify } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <FaReact className="text-blue-400" /> },
    { id: 'backend', name: 'Backend', icon: <FaNodeJs className="text-green-400" /> },
    { id: 'database', name: 'Database', icon: <FaDatabase className="text-yellow-400" /> },
    { id: 'tools', name: 'Tools & Deployment', icon: <FaGitAlt className="text-orange-400" /> }
  ];

  const skills = {
    frontend: [
      { name: "React", icon: <FaReact className="text-blue-400" />, description: "Component-based UI development with React hooks and context API" },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, description: "ES6+, async/await, promises, and DOM manipulation" },
      { name: "HTML5", icon: <FaHtml5 className="text-red-500" />, description: "Semantic markup and accessibility practices" },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, description: "Flexbox, Grid, Animations, and Responsive design" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, description: "Utility-first CSS framework" },
      { name: "Redux", icon: <SiRedux className="text-purple-500" />, description: "State management with Redux and Redux Toolkit" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, description: "Static typing for JavaScript" }
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, description: "JavaScript runtime for server-side development" },
      { name: "Express", icon: <SiExpress className="text-gray-300" />, description: "Web application framework for Node.js" },
      { name: "RESTful APIs", icon: <TbApi className="text-blue-400" />, description: "Design and implementation of RESTful services" },
      { name: "Authentication", icon: <FaServer className="text-purple-400" />, description: "JWT, OAuth, and session-based authentication" }
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, description: "NoSQL database for modern applications" },
      { name: "Mongoose", icon: <FaDatabase className="text-red-400" />, description: "MongoDB object modeling for Node.js" }
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" />, description: "Version control and collaborative development" },
      { name: "AWS", icon: <SiAwsamplify className="text-yellow-400" />, description: "Cloud computing and deployment" },
      { name: "Docker", icon: <FaServer className="text-blue-400" />, description: "Containerization for applications" }
    ]
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm border border-gray-800 shadow-xl">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            My </span>Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-400 to-violet-600 mx-auto"></div>
        </motion.div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Skills grid */}
        <motion.div 
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative"
            >
              <div className="h-full bg-gray-800 bg-opacity-70 rounded-xl p-5 border border-gray-700 shadow-lg hover:shadow-xl hover:border-violet-500 transition-all duration-300">
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <div className="text-3xl mb-3">
                    {skill.icon}
                  </div>
        
                  <h3 className="font-medium mb-2 text-white">{skill.name}</h3>
                  <p className="text-xs text-gray-400 hidden sm:block">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;