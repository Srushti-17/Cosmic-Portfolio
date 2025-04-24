"use client"

import { useEffect, useRef } from "react"

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars with pixel-art style
    const stars: { x: number; y: number; size: number; color: string; speed: number }[] = []

    // Different star colors for retro feel
    const starColors = ["#ffffff", "#ffffcc", "#ccccff", "#ffcccc", "#ccffff"]

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.floor(Math.random() * 3) + 1, // Pixel sizes: 1, 2, or 3
        color: starColors[Math.floor(Math.random() * starColors.length)],
        speed: Math.random() * 0.5 + 0.1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background - dark blue for classic space game feel
      ctx.fillStyle = "#000033"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid for retro game feel
      ctx.strokeStyle = "rgba(50, 50, 150, 0.15)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      const gridSize = 50
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

      // Draw stars as pixels
      stars.forEach((star) => {
        ctx.fillStyle = star.color
        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size)

        // Move stars
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
    </div>
  )
}
