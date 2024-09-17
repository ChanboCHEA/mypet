import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Website</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <a
            href="#home"
            className="block text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#services"
            className="block text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
