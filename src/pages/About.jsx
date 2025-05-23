import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUserAlt, FaAward } from 'react-icons/fa';

import resumePDF from "../assets/SILPA DAS N.pdf";
import { Link } from 'react-scroll';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden dark:bg-gradient-to-br from-black via-gray-900 to-indigo-950 dark:text-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-800 opacity-20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-blue-800 opacity-20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
      </div> */}
      
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Me</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-violet-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-blue-50 dark:bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-xl border dark:border-gray-800 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-violet-600 bg-opacity-20 mr-4">
                  <FaUserAlt className="text-violet-400 text-xl" />
                </div>
                <h2 className="text-xl font-semibold">Personal Info</h2>
              </div>
              
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Name</span>
                  <span className="font-medium">Silpa Das N</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Position</span>
                  <span className="font-medium">MERN Stack Developer</span>
                </li>
                   <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Email</span>
                  <span className="font-medium">silpadas4251@gmail.com</span>
                </li>
                   <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Contact</span>
                  <span className="font-medium">+91 9961158293</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Location</span>
                  <span className="font-medium">Kerala, India</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Availability</span>
                  <span className="font-medium">Full-time / Freelance</span>
                </li>
              </ul>
              
              <motion.a
                href={resumePDF}
                download="Silpa_Das_N_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="mt-8 w-full bg-gradient-to-r from-violet-500 to-violet-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-violet-500/30 flex items-center justify-center"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right column: Biography and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio section */}
            <div className="bg-blue-50 dark:bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-xl border dark:border-gray-800 shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Biography
                </span>
              </h2>
              <p className="text-gray-800 dark:text-gray-300 mb-4">
                I'm a passionate MERN stack developer with a strong foundation in building modern web applications. 
                My journey in tech began with a fascination for creating interactive user experiences, which led me to 
                pursue web development professionally.
              </p>
              <p className="text-gray-800 dark:text-gray-300 mb-4">
                With expertise in MongoDB, Express.js, React, and Node.js, I specialize in creating efficient, 
                scalable applications with clean code and intuitive user interfaces. I'm constantly exploring 
                new technologies and approaches to enhance my skills and deliver high-quality solutions.
              </p>
            </div>
            
            {/* Education and Experience */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Education */}
              <motion.div 
                variants={itemVariants}
                className="bg-blue-50 dark:bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-600 bg-opacity-20 mr-4">
                    <FaGraduationCap className="text-blue-400 text-xl" />
                  </div>
                  <h2 className="text-xl font-semibold">Education</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-gray-700 pb-6">
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-blue-500 rounded-full"></div>
                    <h3 className="text-lg font-medium">B.Tech in Computer Science</h3>
                    <p className="text-violet-600 dark:text-violet-400 mb-1">2020 - 2024</p>
                    <p className="text-gray-800 dark:text-gray-400 text-sm">APJ Abul Kalam Technical University</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Experience */}
              <motion.div 
                variants={itemVariants}
                className="bg-blue-50 dark:bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-purple-600 bg-opacity-20 mr-4">
                    <FaLaptopCode className="text-purple-400 text-xl" />
                  </div>
                  <h2 className="text-xl font-semibold">Experience</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-gray-700 pb-6">
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-purple-500 rounded-full"></div>
                    <h3 className="text-lg font-medium">Full Stack Developer Intern</h3>
                    <p className="text-violet-600 dark:text-violet-400 mb-1">2024 - present</p>
                    <p className="text-gray-800 dark:text-gray-400 text-sm">Bridgeon Solutions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-medium mb-4">Interested in working together?</h3>
          <Link to="contact" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-violet-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-violet-500/30"
            >
              Let's Connect
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;