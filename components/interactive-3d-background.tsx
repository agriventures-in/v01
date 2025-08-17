"use client"

import type React from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import { Environment, Float } from "@react-three/drei"

function FloatingElements({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<any>()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = mousePosition.y * 0.1
      groupRef.current.rotation.z = mousePosition.x * 0.05
    }
  })

  const elements = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10] as [
        number,
        number,
        number,
      ],
      scale: Math.random() * 0.5 + 0.2,
      color: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#f97316" : "#10b981",
    }))
  }, [])

  return (
    <group ref={groupRef}>
      {elements.map((element, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={element.position} scale={element.scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color={element.color} transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export function Interactive3DBackground() {
  const mousePosition = useRef({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent) => {
    mousePosition.current = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    }
  }

  return (
    <div className="fixed inset-0 -z-10" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Environment preset="dawn" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingElements mousePosition={mousePosition.current} />
      </Canvas>
    </div>
  )
}
