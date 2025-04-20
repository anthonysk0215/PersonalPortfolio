import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/experience", label: "Experiences" },
    { to: "/projects", label: "Projects" },
    { to: "/taekwondo", label: "Taekwondo" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className="py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-blue-400 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-colors duration-200
                ${isActive 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-400'
                }
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                after:bg-blue-500 after:transition-transform after:duration-300
                ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
                hover:after:scale-x-100`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium
                  ${isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-400 hover:bg-blue-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

