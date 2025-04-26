"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Maximize2 } from "lucide-react"
import Image from "next/image"
import AstronautGuide from "@/components/astronaut-guide"

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
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

  const projects = [
    {
      id: 1,
      title: "Meds AI",
      description: "AI-POWERED MEDICAL AGENT FOR EFFECTIVE DRUG ANALYSIS.",
      image: "/medsai.png?height=600&width=800",
      tags: ["React", "Next.js", "Node.js", "Tailwind"],
      githubUrl: "https://github.com/Srushti-17/HackOn_CodeByte",
      level: "LEVEL 3",
      xp: "1200 XP",
    },
    {
      id: 2,
      title: "CodeLens",
      description: "A CHROME EXTENSION BUILT USING CHROME AI APIS FOR EXPLAINING CODE SNIPPETS.",
      image: "/codelens.png?height=600&width=800",
      tags: ["Javascript", "CSS", "Chrome APIs"],
      githubUrl: "https://github.com/Srushti-17/CodeLens",
      level: "LEVEL 4",
      xp: "1500 XP",
    },
    {
      id: 3,
      title: "Docolab",
      description: "AI-POWERED DOCUMENT COLLABORATION AND EDITOR TOOL.",
      image: "/docolab.png?height=600&width=800",
      tags: ["React", "Tailwind", "Node.js", "MongoDB"],
      demoUrl: "https://docolab-tool.vercel.app/",
      githubUrl: "https://github.com/Srushti-17/Docolab",
      level: "LEVEL 5",
      xp: "2000 XP",
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 relative" ref={sectionRef}>
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
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyan-400">COSMIC ARTIFACTS</h2>
          </div>
          <p className="text-cyan-100 max-w-2xl mx-auto font-mono">
            &gt; EXPLORE THE GALAXY OF PROJECTS DISCOVERED DURING SPACE MISSIONS. EACH ARTIFACT REPRESENTS A UNIQUE
            CHALLENGE CONQUERED.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="bg-indigo-950/40 backdrop-blur-sm border-2 border-indigo-700 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-60" />

                  <div className="absolute top-2 left-2 px-2 py-1 bg-indigo-900/80 border border-cyan-500 rounded text-xs font-mono text-cyan-300">
                    {project.level}
                  </div>

                  <div className="absolute top-2 right-2 px-2 py-1 bg-indigo-900/80 border border-cyan-500 rounded text-xs font-mono text-cyan-300">
                    {project.xp}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500" />

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-2 right-2 bg-indigo-900/80 hover:bg-indigo-900 text-white border border-cyan-500"
                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white font-mono">{project.title}</h3>
                  <p className="text-cyan-100 mb-4 font-mono text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-indigo-900/50 text-cyan-300 border-cyan-700 font-mono"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => open(project.githubUrl)}
                    className="border-2 border-indigo-700 text-cyan-400 hover:bg-indigo-900/50 font-mono"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    VIEW CODE
                  </Button>
                  
                    {project.demoUrl ? (
                      <>
                        <Button
                        size="sm"
                        onClick={() => open(project.demoUrl)}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white border-2 border-cyan-400 font-mono"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          LAUNCH
                        </Button>
                      </>
                    ) : null}
                  
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Astronaut Guide */}
      {showGuide && <AstronautGuide position="right" animation="float" dialog="projects" />}
    </section>
  )
}
