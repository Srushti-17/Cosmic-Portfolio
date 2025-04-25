"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import AstronautGuide from "@/components/astronaut-guide"

export default function SkillsSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
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

  const skillCategories = [
    {
      title: "FRONTEND TECH",
      skills: [
        { name: "React", level: 90, xp: "9000 XP" },
        { name: "Next.js", level: 70, xp: "8500 XP" },
        { name: "TypeScript", level: 60, xp: "6000 XP" },
        { name: "Tailwind CSS", level: 95, xp: "9500 XP" },
        { name: "Three.js", level: 75, xp: "7500 XP" },
      ],
    },
    {
      title: "BACKEND TECH",
      skills: [
        { name: "Node.js", level: 85, xp: "8500 XP" },
        { name: "Express", level: 80, xp: "8000 XP" },
        { name: "MongoDB", level: 80, xp: "8000 XP" },
        { name: "REST APIs", level: 90, xp: "9000 XP" },
      ],
    },
    {
      title: "TOOLS & OTHER",
      skills: [
        { name: "Git & GitHub", level: 90, xp: "9000 XP" },
        { name: "VS Code", level: 80, xp: "8000 XP" },
        { name: "Python", level: 75, xp: "7500 XP" },
        { name: "Jupyter Notebook", level: 85, xp: "8500 XP" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
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
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyan-400">SKILL TREE</h2>
          </div>
          <p className="text-cyan-100 max-w-2xl mx-auto font-mono">
            &gt; NAVIGATE THROUGH THE CONSTELLATION OF SKILLS AND TECHNOLOGIES MASTERED DURING SPACE EXPLORATION
          </p>
        </motion.div> 

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              variants={fadeInUp}
            >
              <Card className="bg-indigo-950/40 backdrop-blur-sm border-2 border-indigo-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-cyan-400 mr-2"></div>
                    <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
                  </div>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-cyan-100 font-mono">{skill.name}</span>
                          <span className="text-cyan-400 font-mono text-xs">{skill.xp}</span>
                        </div>
                        <div className="relative">
                          <Progress
                            value={skill.level}
                            className="h-4 bg-indigo-900/50 border border-indigo-700"
                            indicatorClassName="bg-gradient-to-r from-cyan-600 to-indigo-600"
                          />
                          <span className="absolute right-2 top-0 text-xs text-white font-mono">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Astronaut Guide */}
      {showGuide && <AstronautGuide position="left" animation="float" dialog="skills" />}
    </section>
  )
}
