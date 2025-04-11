import React, { useState, useCallback } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Taekwondo from "./pages/Taekwondo"
import Contact from "./pages/Contact"
import LandingAnimation from "./components/LandingAnimation"
import Footer from "./components/Footer"

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleAnimationComplete = useCallback(() => {
    setShowLanding(false);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {showLanding ? (
          <LandingAnimation onComplete={handleAnimationComplete} />
        ) : (
          <>
            <div className="pt-4">
              <Navbar />
            </div>
            <main className="flex-grow pt-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/taekwondo" element={<Taekwondo />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  )
}

export default App 