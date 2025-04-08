import React from "react";
import { motion } from "framer-motion";
import plantPortal from "../assets/images/PlantPortalLogo.png";
import clashRoyale from "../assets/images/clash-royale.jpg";
import gymnastics from "../assets/images/gymnastics.png";
import wonkyKong from "../assets/images/wonky-kong.png";
import codeClimbers from "../assets/images/CodeClimbers.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Plant Portal",
      description: "A virtual 3D garden where you can see your plants grow! This platform uses AI to identify your plants and translates them into a dynamic 3D space, while tracking your carbon emissions. Features secure authentication, real-time plant recognition, and an engaging way to connect with sustainability.",
      tags: ["React/Vite", "Tailwind CSS", "Gemini API", "Three.js", "JWT", "MongoDB"],
      image: plantPortal,
      codeLink: "https://github.com/anthonysk0215/PlantPortal",
      demoLink: "https://devpost.com/software/plant-portal",
    },
    {
      id: 2,
      title: "Gymnastics Computer Vision Analysis",
      description: "Analyzing UCLA D1 Gymnastics floor routines to optimize peak flip heights by modeling takeoff angles and momentum offset, extracting joint positions using pose estimation. Featuring image upload with mathematical modeling and visualizations to derive correlations.",
      tags: ["OpenCV", "MediaPipe", "Python", "NumPy", "Matplotlib"],
      image: gymnastics,
      codeLink: "https://github.com/anthonysk0215",
    },
    {
      id: 3,
      title: "Wonky Kong",
      description: "Wonky Kong is a retro-inspired platformer where players navigate platforms, climb ladders, and dodge hazards like rolling barrels and fireballs while trying to reach Kong. With burp-powered attacks and collectible goodies, players must survive each level and advance through increasingly challenging stages.",
      tags: ["C", "C++"],
      image: wonkyKong,
      codeLink: "https://github.com/anthonysk0215/Wonky-Kong",
    },
    {
      id: 4,
      title: "AI Clash Royale Card Predictor",
      description: "Utilizing machine learning techniques to clean, process, and analyze a kaggle dataset on game characters. Creating python scripts to extract meaningful insights, such as determineing how much elixir a fictional card may cost.",
      tags: ["Python", "Pandas", "SVM", "RFC", "Logistic Regression", "NumPy", "Matplotlib"],
      image: clashRoyale,
      codeLink: "https://github.com/anthonysk0215/Clash-Royale-Predictor",
    },
    {
      id: 5,
      title: "CodeClimbers Website",
      description: "Created the CodeClimbers website, a resource for free tech education in Sacramento. It connects youth and seniors with valuable computer science and digital literacy programs. The website implements features like a mobile hamburger menu, sign-up form, and an engaging user interface.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: codeClimbers,
      codeLink: "https://github.com/anthonysk0215/CodeClimbers",
      demoLink: "https://anthonysk0215.github.io/CodeClimbers/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto pb-10"
    >
      <h1 className="text-5xl font-bubble mb-8 text-blue-500">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-sm"
          >
            <div className="h-48 bg-sky-50 flex items-center justify-center">
              <img
                src={project.image} 
                alt={project.title}
                style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
                className="object contain w-full h-full" />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-sky-50 text-sky-600 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons Section */}
              <div className="flex space-x-3 mt-auto">
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-sm text-gray-800 rounded-xl border border-gray-300 hover:bg-gray-200 transition"
                  >
                    Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-sky-100 text-sm text-sky-700 rounded-xl border border-sky-200 hover:bg-sky-200 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
