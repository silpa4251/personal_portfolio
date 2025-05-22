import React, { useState } from "react";
import logo from "../assets/navlogo.png";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

   const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  const navLinks = (
    <>
      <li>
        <Link to="hero" smooth={true} duration={500} onClick={closeNav} className="hover:text-blue-500 cursor-pointer">
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500} onClick={closeNav} className="hover:text-blue-500 cursor-pointer">
          About
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={500} onClick={closeNav} className="hover:text-blue-500 cursor-pointer">
          Skills
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500} onClick={closeNav} className="hover:text-blue-500 cursor-pointer">
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500} onClick={closeNav} className="hover:text-blue-500 cursor-pointer">
          Contact
        </Link>
      </li>
    </>
  );

  return (
   <nav className="bg-gray-100 dark:bg-gray-800 shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center ml-12">
        <img
          className="md:w-20 md:h-14 w-16 h-10 object-contain"
          src={logo}
          alt="Silpa Das N"
        />
      </div>
      <ul className="hidden md:flex gap-7 mr-12 text-gray-800 dark:text-white">
        {navLinks}
        <ThemeToggle />
      </ul>
       <div className="md:hidden dark:text-white text-gray-800 text-2xl mr-8" onClick={toggleNav}>
          {navOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

       {navOpen && (
        <ul className="flex flex-col items-center gap-6 py-4 bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-800 md:hidden">
          {navLinks}
          <ThemeToggle />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
