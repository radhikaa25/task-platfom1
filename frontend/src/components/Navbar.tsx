import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo or Home link */}
            <Link to="/" className="text-2xl font-bold text-white">
              Mock.AI
            </Link>
          </div>

          {/* Navbar Links for larger screens */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Home
              </Link>
              <Link
                to="/projects"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Projects
              </Link>
              <Link
                to="/tasks"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Tasks
              </Link>
              <Link
                to="/about"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Projects
          </Link>
          <Link
            to="/tasks"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Tasks
          </Link>
          <Link
            to="/about"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
