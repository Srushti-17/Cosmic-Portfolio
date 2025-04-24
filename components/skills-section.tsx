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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create constellation points (skills)
    const skills = [
      { name: "React", x: Math.random() * canvas.width, y: Math.random() * canvas.height, level: 90 },
      { name: "Next.js", x: Math.random() * canvas.width, y: Math.random() * canvas.height, level: 85 },
      { name: "TypeScript", x: Math.random() * canvas.width, y: Math.random() * canvas.height, level: 80 },
      { name: "Three.js", x: Math.random() * canvas.width, y: Math.random() * canvas.height, level: 75 },
      { name: "Tailwind CSS", x: Math.random() * canvas.width, y: Math.random() * canvas.height, level: 95 },
      { name: "Node.js", x: Math.random() * canvas.width, y: Math.random() * canvas.height, level: 85 },
      { name: "MongoDB", x: Math.random() * canvas.width, y: Math.random() * canvas.height, level: 80 },
      { name: "GraphQL", x: Math.random() * canvas.width, y: Math.random() * canvas.height, level: 70 },
    ]

    // Draw connections between skills that are close to each other
    const drawConstellations = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid for retro game feel
      ctx.strokeStyle = "rgba(50, 50, 150, 0.15)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      const gridSize = 30
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw connections
      ctx.strokeStyle = "rgba(79, 209, 197, 0.3)" // Cyan with low opacity
      ctx.lineWidth = 2

      for (let i = 0; i < skills.length; i++) {
        for (let j = i + 1; j < skills.length; j++) {
          const dx = skills[i].x - skills[j].x
          const dy = skills[i].y - skills[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            ctx.beginPath()
            ctx.moveTo(skills[i].x, skills[i].y)
            ctx.lineTo(skills[j].x, skills[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw skill points
      skills.forEach((skill) => {
        // Glow effect
        const gradient = ctx.createRadialGradient(skill.x, skill.y, 0, skill.x, skill.y, 20)
        gradient.addColorStop(0, "rgba(79, 209, 197, 0.8)")
        gradient.addColorStop(1, "rgba(79, 209, 197, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(skill.x, skill.y, 20, 0, Math.PI * 2)
        ctx.fill()

        // Skill point - pixelated for retro feel
        ctx.fillStyle = "rgba(79, 209, 197, 0.9)"
        ctx.fillRect(Math.floor(skill.x) - 2, Math.floor(skill.y) - 2, 4, 4)
      })

      requestAnimationFrame(drawConstellations)
    }

    drawConstellations()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skillCategories = [
    {
      title: "FRONTEND TECH",
      skills: [
        { name: "React", level: 90, xp: "9000 XP" },
        { name: "Next.js", level: 85, xp: "8500 XP" },
        { name: "TypeScript", level: 80, xp: "8000 XP" },
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
        { name: "GraphQL", level: 70, xp: "7000 XP" },
        { name: "PostgreSQL", level: 75, xp: "7500 XP" },
      ],
    },
    {
      title: "TOOLS & PRACTICES",
      skills: [
        { name: "Git & GitHub", level: 90, xp: "9000 XP" },
        { name: "CI/CD", level: 80, xp: "8000 XP" },
        { name: "Jest", level: 75, xp: "7500 XP" },
        { name: "Figma", level: 85, xp: "8500 XP" },
        { name: "Agile/Scrum", level: 80, xp: "8000 XP" },
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

        <div className="relative mb-16 h-[300px] rounded-xl overflow-hidden border-2 border-indigo-700">
          <canvas ref={canvasRef} className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-full p-6 text-center">
            <h3 className="text-xl font-bold text-white font-mono mb-2">INTERACTIVE SKILL MAP</h3>
            <p className="text-cyan-300 font-mono text-sm">A COSMIC MAP OF INTERCONNECTED TECHNOLOGIES</p>
          </div>
        </div>

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
