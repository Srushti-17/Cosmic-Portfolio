"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react"
import AstronautGuide from "@/components/astronaut-guide"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState)
      setIsSubmitting(false)
      setFormState({
        name: "",
        email: "",
        message: "",
      })
      // Here you would typically send the data to your backend
    }, 1500)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GITHUB", href: "https://github.com/Srushti-17" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LINKEDIN", href: "https://www.linkedin.com/in/srushti-pillare-065032294/" },
    { icon: <Twitter className="h-5 w-5" />, label: "TWITTER", href: "https://x.com/Srushti_Pillare?t=isg0ia-HYzR-DixC84MlOw&s=08" },
    { icon: <Mail className="h-5 w-5" />, label: "EMAIL", href: "mailto:srushtipillare@gmail.com" },
  ]

  return (
    <section id="contact" className="py-20 relative" ref={sectionRef}>
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
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyan-400">COMMUNICATION TERMINAL</h2>
          </div>
          <p className="text-cyan-100 max-w-2xl mx-auto font-mono">
            &gt; ESTABLISH CONTACT WITH MISSION CONTROL. SEND A TRANSMISSION FOR COLLABORATION OR QUESTIONS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <Card className="bg-indigo-950/40 backdrop-blur-sm border-2 border-indigo-700 overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-cyan-400 mr-2"></div>
                  <h3 className="text-2xl font-bold text-white font-mono">SEND TRANSMISSION</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-cyan-100 font-mono">
                      YOUR CALLSIGN
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="ENTER YOUR NAME"
                      className="bg-indigo-900/30 border-2 border-indigo-700 focus:border-cyan-500 text-white font-mono"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-cyan-100 font-mono">
                      YOUR COMMUNICATION CHANNEL
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="ENTER YOUR EMAIL"
                      className="bg-indigo-900/30 border-2 border-indigo-700 focus:border-cyan-500 text-white font-mono"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-cyan-100 font-mono">
                      YOUR MESSAGE
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="TYPE YOUR MESSAGE HERE..."
                      className="bg-indigo-900/30 border-2 border-indigo-700 focus:border-cyan-500 text-white min-h-[150px] font-mono"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white border-2 border-cyan-400 font-mono"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        SENDING...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        TRANSMIT MESSAGE
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <Card className="bg-indigo-950/40 backdrop-blur-sm border-2 border-indigo-700 overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-cyan-400 mr-2"></div>
                  <h3 className="text-2xl font-bold text-white font-mono">COMMUNICATION CHANNELS</h3>
                </div>

                <div className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="flex items-center p-4 rounded-lg bg-indigo-900/30 border-2 border-indigo-700 hover:bg-indigo-900/50 transition-colors group"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="h-10 w-10 rounded-md bg-indigo-900/70 flex items-center justify-center mr-4 group-hover:bg-indigo-800/70 transition-colors border border-cyan-500">
                        {link.icon}
                      </div>
                      <span className="text-white font-mono">{link.label}</span>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-indigo-900/30 to-cyan-900/30 border-2 border-indigo-700">
                  <h4 className="text-lg font-bold text-white mb-2 font-mono">MISSION AVAILABILITY</h4>
                  <p className="text-cyan-100 font-mono">
                    &gt; CURRENTLY OPEN TO NEW MISSIONS AND COLLABORATIONS. RESPONSE TIME: 24-48 HOURS.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Astronaut Guide */}
      {showGuide && <AstronautGuide position="right" animation="wave" dialog="contact" />}
    </section>
  )
}
