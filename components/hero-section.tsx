"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import AstronautGuide from "@/components/astronaut-guide"


export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >

      <div className="container mx-auto z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 rounded-md bg-indigo-900 text-cyan-300 text-sm font-mono mb-4 border-2 border-cyan-500">
              MISSION BRIEFING: PORTFOLIO EXPLORATION
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono"
          >
            <div className="flex flex-row items-center justify-center">
              <img src='/profile.jpg' alt="profile" className="rounded-full size-[150px] sm:size-[200px] border-2 border-indigo-700" />
              <div className="flex flex-col ">
                <span className="block ">Hi, I'm</span>
                <p className=" text-cyan-400">SRUSHTI PILLARE</p>
              </div>
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-4 bg-indigo-900/50 border-2 border-indigo-700 rounded-lg mb-8"
          >
            <p className="text-xl text-cyan-100 font-mono">
              &gt; NAVIGATE THROUGH AN INTERACTIVE JOURNEY SHOWCASING STELLAR PROJECTS, ASTRONOMICAL SKILLS, AND THE
              UNIVERSE OF POSSIBILITIES.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white border-2 border-cyan-400 font-mono"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              START MISSION
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-950/30 font-mono"
              onClick={() => {
                const resumeUrl = "https://docs.google.com/document/d/1tXtaCQSXhbML5tr6RtIKc1J-R35_ALrkMIUbyD3DEBc/edit?usp=sharing";
                window.open(resumeUrl, "_blank");}
              }>
              VIEW RESUME
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="p-2 bg-indigo-900/50 border-2 border-indigo-700 rounded-full"
        >
          <ChevronDown className="h-6 w-6 text-cyan-400" />
        </motion.div>
      </motion.div>

      {/* Astronaut Guide */}
      {/*showGuide && <AstronautGuide position="right" animation="wave" dialog="greeting" />*/}
    </section>
  )
}
