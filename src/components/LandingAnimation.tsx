import React, { useState, useEffect } from "react";

const words = [
  "software engineer",
  "algorithms",
  "machine learning",
  "developer",
  "neural networks",
  "full stack",
  "artificial intelligence",
];

interface LandingAnimationProps {
  onComplete: () => void;
}

export default function LandingAnimation({ onComplete }: LandingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const duration = Math.max(300 - currentWordIndex * 20, 150);

    const timer = setTimeout(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex((prev) => prev + 1);
      } else {
        setTimeout(onComplete, 300); // brief pause before finishing
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [currentWordIndex, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-2">
        {words.map((word, index) => (
          <div
            key={index}
            className={`text-4xl font-bold transition-all duration-300 ${
              index === currentWordIndex
                ? "text-blue-500 scale-110"
                : "text-gray-400 scale-100"
            }`}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}