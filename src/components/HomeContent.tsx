import React from 'react';
import computerIcon from '../assets/icons/computer.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import emailIcon from '../assets/icons/mail.png';
import githubIcon from '../assets/icons/github-sign.png';
import xIcon from '../assets/icons/twitter.png';

export default function HomeContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-start">
        {/* Left Box */}
          <div className="w-[55%] border-2 border-gray-200 rounded-3xl p-6 shadow-lg ml-16">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-black font-bubble">Hi! I'm </span>
              <span className="text-blue-500 font-bubble">Anthony Do</span>
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              I'm an undergraduate Computer Science and Linguistics student at the University of California, Los Angeles.
              I love building innovative solutions and exploring the intersection of technology and creativity.
            </p>

            <div className="space-y-6">
              <div className="ml-9 space-y-2">
                <div className="flex items-center space-x-3">
                  <img src={computerIcon} alt="Current work" className="w-6 h-6 object-contain" />
                  <span>Currently working on:</span>
                </div>
                <ul className="list-disc ml-12 space-y-1">
                  <li>Personal Portfolio Website</li>
                  <li>Machine Learning Projects</li>
                  <li>Full Stack Development</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-700">Some Fun Facts:</h2>
                <p className="text-base text-gray-700 font-normal leading-relaxed">
                  I drink matcha three times a week. I compete for Team USA Taekwondo. I played piano for seven years. 
                  I resell shoes out of love. My favorite number is 6. Raw crab (Gejang) is the best food.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <img src={emailIcon} alt="Email" className="w-6 h-6 object-contain" />
                <span>anthonydo@ucla.edu</span>
              </div>
            </div>
          </div>

        {/* Profile Picture and Social Links */}
        <div className="flex flex-col items-center w-1/3 mt-16">
          <div className="w-72 h-72 rounded-full bg-gray-200 overflow-hidden mb-6">
            {/* Replace with your actual profile picture */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Profile Picture
            </div>
          </div>

          <div className="flex space-x-4 w-full">
            <a href="https://github.com/anthonysk0215" target="_blank" rel="noopener noreferrer" 
               className="flex-1 flex items-center justify-center p-3 border-2 border-gray-200 rounded-3xl hover:bg-gray-50 transition-colors">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6 object-contain mr-2" />
              <span className="text-sm">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/anthonydo6/" target="_blank" rel="noopener noreferrer"
               className="flex-1 flex items-center justify-center p-3 border-2 border-gray-200 rounded-3xl hover:bg-gray-50 transition-colors">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 object-contain mr-2" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://x.com/anthony_ddo" target="_blank" rel="noopener noreferrer"
               className="flex-1 flex items-center justify-center p-3 border-2 border-gray-200 rounded-3xl hover:bg-gray-50 transition-colors">
              <img src={xIcon} alt="X (Twitter)" className="w-6 h-6 object-contain mr-2" />
              <span className="text-sm">X</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 