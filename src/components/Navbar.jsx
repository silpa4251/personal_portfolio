import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-800 fixed top-0 w-full z-50">
    <h1 className="ml-6 text-xl font-bold text-white">MyPortfolio</h1>
    <ul className="flex gap-7 mr-6">
      <li><a href="/" className="text-white  hover:text-blue-500">Home</a></li>
      <li><a href="/about" className=" text-white hover:text-blue-500">About</a></li>
      <li><a href="/projects" className=" text-white hover:text-blue-500">Projects</a></li>
      <li><a href="/contact" className=" text-white hover:text-blue-500">Contact</a></li>
    </ul>
  </nav>
  )
}

export default Navbar