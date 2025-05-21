import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission with a timeout
    // Replace this with your actual form submission logic
    emailjs.sendForm('service_8e050is', 'template_7sltl6c', e.target, '9tdBsVqee-p9iUq2E')
    .then(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, () => {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    })
    .finally(() => setLoading(false));
};
  
  // Contact info items
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-violet-400" />,
      title: "Email",
      value: "silpadas4251@gmail.com",
      link: "mailto:silpadas4251@gmail.com"
    },
    {
      icon: <FaPhoneAlt className="text-violet-400" />,
      title: "Phone",
      value: "+91 9961158293",
      link: "tel:+919961158293"
    },
    {
      icon: <FaMapMarkerAlt className="text-violet-400" />,
      title: "Location",
      value: "Kerala, India",
      link: null
    }
  ];
  
  // Social media links
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/silpadasn/", 
      label: "LinkedIn",
      color: "bg-blue-600"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/silpa4251", 
      label: "GitHub",
      color: "bg-gray-800"
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/9961158293",
      label: "Whatsapp",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-800 opacity-20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-blue-800 opacity-20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl z-10 relative">
        {/* Page heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-violet-600 mx-auto"></div>
          {/* <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>  */}
        </motion.div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact info card */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Contact Information
                </span>
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-lg bg-gray-800 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="font-medium hover:text-violet-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social links */}
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 ${social.color} rounded-full text-white hover:shadow-lg transition-all`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Send Me a Message
                </span>
              </h2>
              
              {formStatus.submitted && formStatus.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-green-900 bg-opacity-20 border border-green-800 rounded-lg text-center"
                >
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-medium text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-300">{formStatus.message}</p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                    className="mt-4 px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="abc"
                      />
                    </div>
                    
                    {/* Email field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="abc@example.com"
                      />
                    </div>
                  </div>
                  
                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project, questions, or opportunities..."
                    ></textarea>
                  </div>
                  
                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className={`w-full bg-gradient-to-r from-violet-500 to-violet-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-violet-500/30 flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;