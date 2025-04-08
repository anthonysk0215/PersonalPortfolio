import React from "react";
import emailIcon from "../assets/icons/mail.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <img src={emailIcon} alt="Email" className="w-5 h-5" />
          <a href="mailto:anthonydo@ucla.edu" className="hover:underline text-sm">
            anthonydo@ucla.edu
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © 2025 Anthony Do. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
