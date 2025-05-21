import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from '../components/Footer'
import Skills from './Skills'

const Home = () => {
  return (
    <>
        <Navbar />
        <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
      <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
        <Footer />
    </>
  )
}

export default Home