import React, { useState, useEffect } from 'react';
import project1 from "../assets/project1.png";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiReact, SiNodedotjs } from 'react-icons/si';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);


  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimateCards(true), 100);
  }, []);


  // Technology icons mapping
  const techIcons = {
    react: <SiReact className="text-cyan-500" />,
    node: <SiNodedotjs className="text-green-600" />,
    express: <SiExpress className="text-gray-400" />,
    mongodb: <SiMongodb className="text-green-500" />,
    tailwind: <SiTailwindcss className="text-blue-400" />,
    firebase: <SiFirebase className="text-yellow-500" />
  };
 
  // Project data - using your existing projects
  const projects = [
    {
      id: 1,
      title: "Intellecta",
      description: "Intellcta is an AI-powered learning platform that delivers personalized, inclusive, and engaging education for students aged 5–18.",
      fullDescription: "Intellcta is an AI-powered learning platform designed to personalize education for students aged 5–18. It features intelligent assessments, adaptive learning paths, gamified lessons, and a virtual AI tutor. The platform focuses on inclusivity with tailored support for kids with autism and aims to make learning engaging, accessible, and effective through modern technologies like VR and AI.",
      image: project1,
      githubLink: "https://github.com/silpa4251/intellecta",
      technologies: ["react", "typescript", "node", "express", "mongodb", "tailwind", "AWS S3 bucket"],
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
      description: "A comprehensive task management application designed for individuals and teams.",
      fullDescription: "A comprehensive task management application designed for individuals and teams. TaskMaster Pro helps users organize tasks, track progress, and collaborate efficiently with an intuitive interface.",
      image: "/api/placeholder/800/500",
      demoLink: "https://taskmaster.example.com",
      githubLink: "https://github.com/username/taskmaster",
      technologies: ["react", "node", "mongodb", "tailwind"],
      features: [
        "Drag-and-drop task organization",
        "Task filtering and priority management",
        "Calendar integration and reminders",
        "Team collaboration features",
        "Progress tracking and reporting"
      ]
    },
    {
      id: 3,
      title: "Step Whisper - An E-Commerce site",
      description: "A modern weather application providing real-time weather data and forecasting.",
      fullDescription: "A modern weather application providing real-time weather data, forecasting, and location-based services with an elegant and intuitive user interface.",
      image: "/api/placeholder/800/500",
      demoLink: "https://weather-app.example.com",
      githubLink: "https://github.com/username/weather-app",
      technologies: ["react", "tailwind"],
      features: [
        "Real-time weather updates",
        "7-day forecasting",
        "Location-based services",
        "Weather maps and radar",
        "Customizable alerts and notifications"
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills and projects.",
      fullDescription: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey as a developer, built with React and Tailwind CSS.",
      image: "/api/placeholder/800/500",
      demoLink: "https://portfolio.example.com",
      githubLink: "https://github.com/username/portfolio",
      technologies: ["react", "tailwind"],
      features: [
        "Modern UI with smooth animations",
        "Responsive design for all devices",
        "Project showcase section",
        "Skills and experience timeline",
        "Contact form with form validation"
      ]
    }
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
    <section className="relative min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 sm:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-full opacity-10">
            {/* Grid pattern */}
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
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-blue-400 font-mono uppercase tracking-wider mb-2">What I've Built</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Featured Projects</h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4"></div>
        </div>
       
        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 transition-all duration-700 hover:shadow-blue-500/20 transform ${
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
                    <span key={tech} className="flex items-center gap-1 text-xs bg-slate-700 px-2 py-1 rounded">
                      {techIcons[tech]}
                      <span>{tech}</span>
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded">+{project.technologies.length - 3}</span>
                  )}
                </div>
               
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-6 line-clamp-2">{project.description}</p>
               
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Details
                  </button>
                 
                  <div className="flex space-x-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
        {/* Project modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div
              className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-opacity-70"
                >
                  ×
                </button>
              </div>
             
              {/* Modal content */}
              <div className="p-6 sm:p-8">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
               
                <p className="text-slate-300 mb-6">{selectedProject.fullDescription}</p>
               
                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 p-2 bg-slate-800 rounded"
                      >
                        <span className="text-xl">{techIcons[tech]}</span>
                        <span>{tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
               
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
               
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaExternalLinkAlt /> View Live Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded flex items-center justify-center gap-2 transition-colors"
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
