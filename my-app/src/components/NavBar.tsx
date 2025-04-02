import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-lg font-medium transition-colors duration-200
              ${isActive 
                ? 'text-blue-500' 
                : 'text-gray-600 hover:text-blue-300'
              }
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
              after:bg-blue-500 after:transition-transform after:duration-300
              ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
              hover:after:scale-x-100`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `relative text-lg font-medium transition-colors duration-200
              ${isActive 
                ? 'text-blue-500' 
                : 'text-gray-600 hover:text-blue-300'
              }
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
              after:bg-blue-500 after:transition-transform after:duration-300
              ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
              hover:after:scale-x-100`
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `relative text-lg font-medium transition-colors duration-200
              ${isActive 
                ? 'text-blue-500' 
                : 'text-gray-600 hover:text-blue-300'
              }
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
              after:bg-blue-500 after:transition-transform after:duration-300
              ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
              hover:after:scale-x-100`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/taekwondo"
            className={({ isActive }) =>
              `relative text-lg font-medium transition-colors duration-200
              ${isActive 
                ? 'text-blue-500' 
                : 'text-gray-600 hover:text-blue-300'
              }
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
              after:bg-blue-500 after:transition-transform after:duration-300
              ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
              hover:after:scale-x-100`
            }
          >
            Taekwondo
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative text-lg font-medium transition-colors duration-200
              ${isActive 
                ? 'text-blue-500' 
                : 'text-gray-600 hover:text-blue-300'
              }
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
              after:bg-blue-500 after:transition-transform after:duration-300
              ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
              hover:after:scale-x-100`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

