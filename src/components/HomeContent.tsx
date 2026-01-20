import { motion } from 'framer-motion';
import computerIcon from '../assets/icons/computer.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github-sign.png';
import xIcon from '../assets/icons/twitter.png';
import profile from '../assets/images/GPT-Ghibili-image.png';
import { TextShimmer } from './ui/text-shimmer';
import { ContainerScroll } from './ui/container-scroll-animation';

export default function HomeContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col overflow-hidden mt-0"
    >
      <div className="mt-0 md:mt-6">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-4xl font-semibold text-black dark:text-white mb-0 md:-mt-12">
                Hi, I'm <br />
                <TextShimmer
                  duration={1.75}
                  className="text-6xl md:text-[6rem] font-helvetica mt-0 md:mt-1 leading-[1.1] [--base-color:theme(colors.blue.500)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
                >
                  Anthony Do
                </TextShimmer>
              </h1>
            </>
          }
        >
          <div className="flex flex-col md:flex-row h-full w-full gap-8 p-4 md:p-6 mb-10">
            <div className="flex-1 space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm an undergraduate student at the University of California, Los Angeles studying Computer Science, Data Science, and Linguistics.
                I'm passionate about blending technology, analytics, and language processing to solve impactful issues.
              </p>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <img src={computerIcon} alt="Current work" className="w-6 h-6 object-contain" />
                    <span className="text-gray-700 dark:text-gray-300">Currently working on:</span>
                  </div>
                  <ul className="list-disc ml-12 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Staff Software Engineer at Daily Bruin</li>
                    <li>Machine Learning Researcher at UCLA ScAi Lab</li>
                    <li>Technology Consulting Director at Glitch UCLA</li>
                    <li>IT Support at UCLA Social Sciences Center</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Some Fun Facts:</h2>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    I'm an avid matcha drinker. I compete for Team USA Taekwondo. I've played piano for seven years. 
                    I resell shoes out of love. My favorite number is 6. 
                    And Korean raw marinated crab's my favorite food.
                  </p>
                </div>
              </div>
            </div>

            {/* Right content - Profile image and social links */}
            <div className="flex flex-row md:flex-col items-center md:space-y-6 space-x-4 md:space-x-0 w-full md:w-auto">
              <div className="w-32 h-32 md:w-72 md:h-72 rounded-full overflow-hidden mb-0 md:mb-7 flex-shrink-0">
                <img src={profile} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 w-full md:w-auto ml-2 md:ml-0">
                <a href="https://github.com/anthonysk0215" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center justify-center p-3 border-2 border-gray-200 dark:border-gray-700 rounded-3xl hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 mb-0 md:mb-0">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6 object-contain mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/anthonydo6/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 border-2 border-gray-200 dark:border-gray-700 rounded-3xl hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 mb-0 md:mb-0">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 object-contain mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">LinkedIn</span>
                </a>
                <a href="https://x.com/anthony_ddo" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 border-2 border-gray-200 dark:border-gray-700 rounded-3xl hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 mb-0 md:mb-0">
                  <img src={xIcon} alt="X (Twitter)" className="w-6 h-6 object-contain mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">X</span>
                </a>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </motion.div>
  );
}