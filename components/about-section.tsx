"use client"

import { motion, useInView } from "framer-motion"
import { Telescope, Rocket, Code, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useRef, useState, useEffect } from "react"
import AstronautGuide from "@/components/astronaut-guide"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [showGuide, setShowGuide] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowGuide(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setShowGuide(false)
    }
  }, [isInView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-indigo-950/10 to-black/0 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-indigo-900/70 border-2 border-cyan-500 rounded-md mb-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyan-400">PLAYER STATS</h2>
          </div>
          <p className="text-cyan-100 max-w-2xl mx-auto font-mono">
            &gt; CHARACTER PROFILE AND MISSION HISTORY OF THIS COSMIC EXPLORER
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <Card className="bg-indigo-950/40 backdrop-blur-sm border-2 border-indigo-700 overflow-hidden group">
              <CardContent className="p-6">
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-cyan-400 mr-2"></div>
                    <h3 className="text-2xl font-bold text-white font-mono">MISSION OBJECTIVE</h3>
                  </div>
                  <div className="pl-6 border-l-2 border-indigo-700">
                    <p className="text-cyan-100 mb-4 font-mono">
                      &gt; AS A DIGITAL SPACE EXPLORER, I NAVIGATE THE VAST UNIVERSE OF WEB DEVELOPMENT, CHARTING NEW
                      TERRITORIES AND CREATING IMMERSIVE EXPERIENCES.
                    </p>
                    <p className="text-cyan-100 font-mono">
                      &gt; MY MISSION: COMBINE TECHNICAL EXCELLENCE WITH CREATIVE INNOVATION, CRAFTING DIGITAL
                      EXPERIENCES THAT ARE BOTH FUNCTIONAL AND CAPTIVATING.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-600/20 rounded-full blur-3xl group-hover:bg-cyan-600/30 transition-all duration-700 ease-in-out" />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <Card className="bg-indigo-950/40 backdrop-blur-sm border-2 border-indigo-700 overflow-hidden group">
              <CardContent className="p-6">
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-cyan-400 mr-2"></div>
                    <h3 className="text-2xl font-bold text-white font-mono">JOURNEY LOG</h3>
                  </div>
                  <div className="pl-6 border-l-2 border-indigo-700">
                    <p className="text-cyan-100 mb-4 font-mono">
                      &gt; Mahatma Gandhi Centennial Sindhu High School - 2020 <br />
                      91% HSC
                    </p>
                    <p className="text-cyan-100 mb-4 font-mono">
                      &gt; Sindhi Hindi Junior College - 2022 <br />
                      91% SSC
                    </p>
                    <p className="text-cyan-100 font-mono">
                      &gt; JD College Of Engineering and Management - 2022 to 2026 <br />
                      9.20 CGPA B.Tech in AI
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl group-hover:bg-indigo-600/30 transition-all duration-700 ease-in-out" />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Telescope className="h-10 w-10 text-cyan-400" />,
              title: "EXPLORER",
              description: "SEEKING NEW TECHNOLOGIES AND APPROACHES TO EXPAND COSMIC KNOWLEDGE",
              delay: 0.2,
              level: "LVL 8",
            },
            {
              icon: <Rocket className="h-10 w-10 text-cyan-400" />,
              title: "INNOVATOR",
              description: "LAUNCHING CREATIVE SOLUTIONS THAT PROPEL PROJECTS BEYOND EXPECTATIONS",
              delay: 0.4,
              level: "LVL 9",
            },
            {
              icon: <Code className="h-10 w-10 text-cyan-400" />,
              title: "DEVELOPER",
              description: "CRAFTING CLEAN, EFFICIENT CODE THAT POWERS SEAMLESS DIGITAL EXPERIENCES",
              delay: 0.6,
              level: "LVL 10",
            },
            {
              icon: <Zap className="h-10 w-10 text-cyan-400" />,
              title: "PROBLEM SOLVER",
              description: "NAVIGATING THROUGH COMPLEX CHALLENGES WITH STRATEGIC THINKING",
              delay: 0.8,
              level: "LVL 7",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: item.delay }}
              variants={fadeInUp}
            >
              <Card className="bg-indigo-950/40 backdrop-blur-sm border-2 border-indigo-700 h-full group hover:bg-indigo-950/60 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-2 bg-indigo-900/70 p-2 rounded-md border border-cyan-500 text-xs font-mono text-cyan-300">
                    {item.level}
                  </div>
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white font-mono">{item.title}</h3>
                  <p className="text-cyan-100 text-sm font-mono">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Astronaut Guide */}
      {showGuide && <AstronautGuide position="left" animation="point" dialog="about" />}
    </section>
  )
}
