import React from 'react'
import logo from "../assets/navlogo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-800 fixed top-0 w-full z-50">
      <div className="flex items-center ml-6">
        <img className="w-16 h-10 object-contain" src={logo} alt='Silpa Das N' />
      </div>
      <ul className="flex gap-7 mr-6">
        <li><a href="/" className="text-white hover:text-blue-500">Home</a></li>
        <li><a href="/about" className="text-white hover:text-blue-500">About</a></li>
        <li><a href="/projects" className="text-white hover:text-blue-500">Projects</a></li>
        <li><a href="/contact" className="text-white hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
