import React from "react";
import emailIcon from "../assets/icons/mail.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import githubIcon from "../assets/icons/github2.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto w-full">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pl-40 pr-40">
        <div className="flex flex-col items-start text-left gap-y-2">
          <div className="flex items-center gap-2">
            <img src={emailIcon} alt="Email" className="w-5 h-5" />
            <a href="mailto:anthonydo@ucla.edu" className="hover:underline text-sm">
              anthonydo@ucla.edu
            </a>
          </div>
          <div className="flex flex-col gap-y-2">
            <a href="https://github.com/anthonysk0215" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
              <span className="text-sm">github.com/anthonysk0215</span>
            </a>
            <a href="https://www.linkedin.com/in/anthonydo6/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              <span className="text-sm">linkedin.com/in/anthonydo6</span>
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-400 text-right mt-6 sm:mt-0">
          © 2025 Anthony Do. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
