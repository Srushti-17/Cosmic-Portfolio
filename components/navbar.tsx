"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Rocket, Menu, X, Heart, Star, Zap } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState("hero")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Calculate scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const scrollProgress = (window.scrollY / totalHeight) * 100
      setProgress(scrollProgress)

      // Determine current section
      const sections = ["hero", "about", "projects", "skills", "contact"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setCurrentSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Mission Start", href: "#hero", id: "hero" },
    { name: "Player Stats", href: "#about", id: "about" },
    { name: "Artifacts", href: "#projects", id: "projects" },
    { name: "Skill Tree", href: "#skills", id: "skills" },
    { name: "Comms", href: "#contact", id: "contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-indigo-950/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Game-style progress bar at the very top */}
      <div className="absolute top-0 left-0 w-full h-1">
        <Progress value={progress} className="h-1 bg-black/50" indicatorClassName="bg-cyan-400" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo area */}
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <div className="flex items-center justify-center w-8 h-8 bg-indigo-900 border-2 border-cyan-400 rounded-lg">
              <Rocket className="h-4 w-4 text-cyan-400" />
            </div>
            <span className="text-cyan-400 font-mono tracking-wider">COSMIC EXPLORER</span>
          </a>

          {/* Game stats - only on desktop */}
          <div className="hidden md:flex items-center gap-6 px-4 py-1 bg-indigo-900/50 border border-indigo-700 rounded-lg">
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-white text-sm font-mono">100%</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-white text-sm font-mono">5</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-white text-sm font-mono">LEVEL 10</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-sm font-mono transition-colors relative ${
                  currentSection === link.id
                    ? "text-white bg-indigo-700 border-2 border-cyan-400"
                    : "text-gray-300 border-2 border-transparent hover:border-indigo-700"
                } rounded-md`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white p-1 bg-indigo-900 border-2 border-cyan-400 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-indigo-950/90 backdrop-blur-md border-t-2 border-indigo-700"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`py-2 px-4 font-mono ${
                  currentSection === link.id
                    ? "bg-indigo-700 text-white border-l-4 border-cyan-400"
                    : "text-gray-300 hover:bg-indigo-900/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile game stats */}
            <div className="mt-4 flex justify-between items-center px-4 py-2 bg-indigo-900/50 border border-indigo-700 rounded-lg">
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-white text-sm font-mono">100%</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-white text-sm font-mono">5</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span className="text-white text-sm font-mono">LEVEL 10</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
