import React, { useState, useEffect } from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiReact, SiNodedotjs, SiAwsamplify } from 'react-icons/si';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateCards(true), 100);
  }, []);

  const techIcons = {
    react: <SiReact className="text-cyan-500" />,
    node: <SiNodedotjs className="text-green-600" />,
    express: <SiExpress className="text-gray-400" />,
    mongodb: <SiMongodb className="text-green-500" />,
    tailwind: <SiTailwindcss className="text-blue-400" />,
    typescript: <SiTypescript className="text-blue-600" />,
    AWS: <SiAwsamplify className='text-yellow-500' />
  };
 
  const projects = [
    {
      id: 1,
      title: "Intellecta",
      description: "Intellcta is an AI-powered learning platform that delivers personalized, inclusive, and engaging education for students aged 5–18.",
      fullDescription: "Intellcta is an AI-powered learning platform designed to personalize education for students aged 5–18. It features intelligent assessments, adaptive learning paths, gamified lessons, and a virtual AI tutor. The platform focuses on inclusivity with tailored support for kids with autism and aims to make learning engaging, accessible, and effective through modern technologies like VR and AI.",
      image: project1,
      githubLink: "https://github.com/silpa4251/intellecta-client",
      technologies: ["react", "typescript", "node", "express", "mongodb", "tailwind", "AWS"],
      features: [
        "AI-Powered Personalized Learning",
        "Initial Skill Assessment",
        "Age & Difficulty-Based Content",
        "Virtual AI Tutor",
        "Interactive Lessons & quizes",
        "Progress tracking",
        "User Dashboard"
      ]
    },
    {
      id: 2,
      title: "Fixmate",
      description: "Fixmate is a location-based service booking platform that connects users with trusted service providers for home repairs, cleaning, and essential services, all in just a few clicks.",
      fullDescription: "Fixmate is a full-featured MERN stack web application designed to simplify service booking by seamlessly connecting users with verified local service providers. Whether it’s a one-time plumbing issue or regular home cleaning, Fixmate offers an intuitive interface, real-time provider availability, and secure payments — making service booking faster, safer, and smarter.",
      image: project2,
      demoLink: "https://taskmaster.example.com",
      githubLink: "https://github.com/silpa4251/Fixmate",
      technologies: ["react", "node", "express", "mongodb", "tailwind"],
      features: [
        "Location-based provider searching with live map",
        "Single and Multiple days Service Booking",
        "Secure online payments via Razorpay",
        "Show availability based on provider schedules.",
        "Users can view, reschedule, or cancel bookings easily.",
        "Ratings & reviews system for service feedback",
        "providers can confirm, complete or cancel the booking"
      ]
    },
    {
      id: 3,
      title: "Step Whisper - An E-Commerce site",
      description: "A modern, responsive shoe e-commerce platform for browsing, managing, and purchasing footwear with ease.",
      fullDescription: "This shoe e-commerce website is a fully functional MERN stack application that allows users to explore, filter, and purchase a wide variety of footwear. With user authentication, admin controls, and a seamless shopping experience, the platform supports cart management, order placement, wishlists, and dynamic product updates.",
      image: project3,
      demoLink: "https://weather-app.example.com",
      githubLink: "https://github.com/silpa4251/fullStack_shoe-ecommerce",
      technologies: ["react","node", "express", "mongoDb", "tailwind"],
      features: [
        "User login & registration",
        "Product search & filtering",
        "Add to cart & wishlist",
        "Secure checkout & order placement",
        "Admin dashboard for managing products, users & orders",
        "Profile & address management"
      ]
    },
    // {
    //   id: 4,
    //   title: "Portfolio Website",
    //   description: "A modern, responsive portfolio website showcasing my skills and projects.",
    //   fullDescription: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey as a developer, built with React and Tailwind CSS.",
    //   image: "/api/placeholder/800/500",
    //   demoLink: "https://portfolio.example.com",
    //   githubLink: "https://github.com/username/portfolio",
    //   technologies: ["react", "tailwind"],
    //   features: [
    //     "Modern UI with smooth animations",
    //     "Responsive design for all devices",
    //     "Project showcase section",
    //     "Skills and experience timeline",
    //     "Contact form with form validation"
    //   ]
    // }
  ];


  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };


  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };


  return (
    <section className="relative min-h-screen dark:bg-gradient-to-r from-slate-900 to-slate-800 dark:text-white py-16 px-4 sm:px-8">
      <div className="absolute overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-full opacity-10">
            <div className="h-screen w-full"
                 style={{
                   backgroundImage: 'linear-gradient(to right, #4a5568 1px, transparent 1px), linear-gradient(to bottom, #4a5568 1px, transparent 1px)',
                   backgroundSize: '4rem 4rem'
                 }}>
            </div>
          </div>
        </div>
      </div>
     
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Projects</span></h1>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-violet-600 mx-auto mt-4"></div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 transition-all duration-700 hover:shadow-blue-500/20 transform ${
                animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
             
              {/* Project info */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="flex items-center gap-1 text-xs bg-blue-50 dark:bg-slate-700 px-2 py-1 rounded">
                      {techIcons[tech]}
                      <span>{tech}</span>
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-blue-50 dark:bg-slate-700 px-2 py-1 rounded">+{project.technologies.length - 3}</span>
                  )}
                </div>
               
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-800 dark:text-slate-300 mb-6 line-clamp-2">{project.description}</p>
               
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-500 transition-colors"
                  >
                    View Details
                  </button>
                 
                  <div className="flex space-x-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-400 dark:hover:text-white hover:text-slate-500 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    {/* <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
        {/* Project modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 dark:bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 mt-16">
            <div
              className="bg-slate-200 dark:bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header with image */}
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-5 right-3 dark:bg-black bg-opacity-50 bg-gray-200 rounded-full w-10 h-10 flex justify-center text-3xl hover:bg-opacity-70"
                >
                  ×
                </button>
              </div>
             
              {/* Modal content */}
              <div className="p-6 sm:p-8">
                <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-white">{selectedProject.title}</h2>
               
                <p className="text-gray-800 dark:text-slate-300 mb-6">{selectedProject.fullDescription}</p>
               
                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-slate-800 rounded"
                      >
                        <span className="text-xl">{techIcons[tech]}</span>
                        <span>{tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
               
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-blue-500 dark:text-blue-400">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
               
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaExternalLinkAlt /> View Live Demo
                  </a> */}
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-violet-600 dark:bg-slate-700 dark:hover:bg-slate-600 hover:shadow-violet-500/30 text-white px-6 py-3 rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaGithub /> View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


export default Projects;
