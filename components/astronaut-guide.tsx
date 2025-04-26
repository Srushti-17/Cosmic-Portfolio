"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type AstronautPosition = "left" | "right" | "center" | "bottom"
type AstronautAnimation = "idle" | "wave" | "point" | "float"
type DialogType = "greeting" | "about" | "projects" | "skills" | "contact" | null

interface AstronautGuideProps {
  position?: AstronautPosition
  animation?: AstronautAnimation
  dialog?: DialogType
  onDialogComplete?: () => void
  className?: string
}

export default function AstronautGuide({
  position = "right",
  animation = "idle",
  dialog = null,
  onDialogComplete,
  className = "",
}: AstronautGuideProps) {
  const [showDialog, setShowDialog] = useState(!!dialog)
  const [dialogText, setDialogText] = useState<string>("")
  const [isTyping, setIsTyping] = useState(false)

  const positionStyles = {
    left: "left-8 bottom-20",
    right: "right-8 bottom-20",
    center: "left-1/2 -translate-x-1/2 bottom-20",
    bottom: "left-1/2 -translate-x-1/2 bottom-8",
  }

  const astronautVariants = {
    idle: {
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "easeInOut",
        },
      },
    },
    wave: {
      rotate: [0, 15, -5, 15, 0],
      transition: {
        rotate: {
          repeat: 2,
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
    point: {
      x: [0, 10, 0],
      transition: {
        x: {
          repeat: 2,
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
    float: {
      y: [0, -15, 0],
      x: [0, 10, 0, -10, 0],
      transition: {
        y: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 4,
          ease: "easeInOut",
        },
        x: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 6,
          ease: "easeInOut",
        },
      },
    },
  }
  

  useEffect(() => {
    if (!dialog) {
      setShowDialog(false)
      return
    }

    setIsTyping(true)
    setShowDialog(true)

    let text = ""
    switch (dialog) {
      case "greeting":
        text =
          "Greetings, explorer! I'm Captain Pixel. Welcome to my cosmic portfolio. Let me guide you through this adventure!"
        break
      case "about":
        text =
          "This is my mission log. Here you'll learn about my journey through the digital cosmos and my skills as a space developer."
        break
      case "projects":
        text =
          "These are the cosmic artifacts I've discovered and created during my missions. Click on them to learn more!"
        break
      case "skills":
        text =
          "My star chart shows the technologies I've mastered during my journey. Each constellation represents a different skill set."
        break
      case "contact":
        text = "Want to join forces for a mission? Send a transmission through this communication terminal!"
        break
    }

    let currentText = ""
    const textArray = text.split("")
    let i = 0

    const typingInterval = setInterval(() => {
      if (i < textArray.length) {
        currentText += textArray[i]
        setDialogText(currentText)
        i++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)

        setTimeout(() => {
          setShowDialog(false)
          if (onDialogComplete) onDialogComplete()
        }, 5000)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [dialog, onDialogComplete])

  return (
    <div className={`fixed z-50 ${positionStyles[position]} ${className}`}>
      <motion.div variants={astronautVariants} animate={animation} className="relative">
        {/* Astronaut image */}
        <div className="w-32 h-32 relative">
          <Image
            src="/girl.png?height=128&width=128"
            alt="Astronaut Guide"
            width={128}
            height={128}
            className="drop-shadow-[0_0_8px_rgba(100,100,255,0.5)]"
          />
        </div>

        {/* Dialog bubble */}
        <AnimatePresence>
          {showDialog && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="absolute top-0 transform -translate-y-full -translate-x-1/4 w-64 p-4 bg-indigo-900/90 border-2 border-indigo-400 rounded-lg text-white text-sm mt-2"
            >
              <div className="pixel-corners relative">
                {dialogText}
                {isTyping && <span className="inline-block w-2 h-4 bg-white ml-1 animate-blink"></span>}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-indigo-400"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
