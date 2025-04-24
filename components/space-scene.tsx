"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars, useTexture, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Planet({ position = [0, 0, 0], size = 1, rotationSpeed = 0.005, textureUrl = "/assets/textures/earth.jpg" }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useTexture(textureUrl)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <mesh ref={meshRef} position={position as [number, number, number]}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

function Orbit({ radius = 2, width = 0.01 }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - width, radius + width, 64]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.4} side={THREE.DoubleSide} />
    </mesh>
  )
}

function SceneContent() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 2, 6)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Main planet (Earth-like) */}
      <Planet position={[0, 0, 0]} size={1.5} textureUrl="/placeholder.svg?height=512&width=512" />

      {/* Orbits */}
      <Orbit radius={3} />
      <Orbit radius={5} />

      {/* Smaller planets */}
      <Planet position={[3, 0, 0]} size={0.4} rotationSpeed={0.01} textureUrl="/placeholder.svg?height=256&width=256" />
      <Planet
        position={[-2, 0, -4.5]}
        size={0.6}
        rotationSpeed={0.007}
        textureUrl="/placeholder.svg?height=256&width=256"
      />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

export default function SpaceScene() {
  return (
    <Canvas className="w-full h-full">
      <SceneContent />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.3} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
