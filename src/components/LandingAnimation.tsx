import React, { useState, useEffect, useRef } from "react"

const words = [
  "software engineer",
  "algorithms",
  "machine learning",
  "natural language processing",
  "web development",
  "data science",
  "artificial intelligence",
]

interface LandingAnimationProps {
  onComplete: () => void;
}

export default function LandingAnimation({ onComplete }: LandingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Total animation should be 2 seconds
    // With 7 words, each word gets about 250ms on average
    const duration = Math.max(300 - (currentWordIndex * 20), 150);
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (currentWordIndex < words.length - 1) {
          setCurrentWordIndex(prev => prev + 1);
          setIsVisible(true);
        } else {
          onComplete();
        }
      }, 50); // Very quick fade out
    }, duration);

    animationRef.current = timer;
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [currentWordIndex, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div 
        className={`text-4xl font-bold text-baby-blue transition-all duration-50 transform ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}
      >
        {words[currentWordIndex]}
      </div>
    </div>
  )
}

