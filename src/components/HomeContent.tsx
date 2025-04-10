import React from 'react';
import { motion } from 'framer-motion';
import computerIcon from '../assets/icons/computer.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github-sign.png';
import xIcon from '../assets/icons/twitter.png';

export default function HomeContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-start">

        {/* Left Box with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-[55%] border-2 border-gray-200 rounded-3xl p-6 shadow-lg ml-16"
        >
          <h1 className="flex justify-center text-6xl font-bold mb-4">
            <span className="text-blue-500 font-bubble">
              Anthony Do
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Hi! I'm an undergraduate student at the University of California, Los Angeles studying Computer Science, Data Science, and Linguistics.
            I'm passionate about blending technology, analytics, and language processing to solve impactful issues.
          </p>

          <div className="space-y-6">
            <div className="ml-9 space-y-2">
              <div className="flex items-center space-x-3">
                <img src={computerIcon} alt="Current work" className="w-6 h-6 object-contain" />
                <span>Currently working on:</span>
              </div>
              <ul className="list-disc ml-12 space-y-1">
                <li>Software Developer for Daily Bruin Internal Tools Team</li>
                <li>Machine Learning Researcher at UCLA VCLA Lab</li>
                <li>Building this personal website</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-700">Some Fun Facts:</h2>
              <p className="text-base text-gray-700 font-normal leading-relaxed">
                I've visited 11 countries. I'm an avid matcha drinker. I compete for Team USA Taekwondo. I've played piano for seven years. 
                I resell shoes out of love. My favorite number is 6. And Korean raw marinated crab's the best food.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Box with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col items-center w-1/3 mt-16"
        >
          <div className="w-72 h-72 rounded-full bg-gray-200 overflow-hidden mb-10">
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
        </motion.div>
      </div>
    </main>
  );
}