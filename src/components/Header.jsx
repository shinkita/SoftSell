import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FaUpload, FaChartBar, FaMoneyBillWave, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.theme = 'light'; 
    } else {
      html.classList.add('dark');
      localStorage.theme = 'dark'; 
    }
  };


  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
       
      <img src={logo} className="h-12 w-auto" alt="SoftSell Logo" />

     
      <nav className="hidden md:flex items-center space-x-6">
  <a href="#how-it-works" className="text-gray-700 hover:text-[#5325B0]">How It Works</a>
  <a href="#why-us" className="text-gray-700 hover:text-[#5325B0]">Why Choose Us</a>
  <a href="#testimonials" className="text-gray-700 hover:text-[#5325B0]">Testimonials</a>
  <a
    href="#contact"
    className="text-[#5325B0] px-4 py-2 rounded-[25px] border border-[#5325B0] hover:bg-[#5325B0] hover:text-white transition-colors duration-300"
  >
    Get a Quote
  </a>
  <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-1  rounded text-sm "
          >
             {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
          </button>
</nav>


   
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

  
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          <a href="#how-it-works" className="block text-gray-700 hover:text-blue-600">How It Works</a>
          <a href="#why-us" className="block text-gray-700 hover:text-blue-600">Why Choose Us</a>
          <a href="#testimonials" className="block text-gray-700 hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="w-[25%] block bg-[#5325B0] text-white px-4 py-2 rounded hover:bg-blue-700">Get a Quote</a>
          <button
            onClick={toggleDarkMode}
            className="w-full px-3 py-2 text-sm rounded"
          >
            {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
