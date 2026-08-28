'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, RoundedBox } from '@react-three/drei'
import { motion } from 'framer-motion'
import type { Group } from 'three'
import type { RefObject } from 'react'

const ROTATION_INTENSITY = 2
const HOVER_ROTATION_MULTIPLIER = 3

function AlignerModel({ hoveredRef }: { hoveredRef: RefObject<boolean> }) {
  const groupRef = useRef<Group>(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const intensity = hoveredRef.current
      ? ROTATION_INTENSITY * HOVER_ROTATION_MULTIPLIER
      : ROTATION_INTENSITY
    groupRef.current.rotation.y += delta * 0.3 * intensity
    groupRef.current.rotation.x += delta * 0.08 * intensity
  })

  return (
    <group ref={groupRef}>
      <RoundedBox args={[1.8, 1.8, 1.8]} radius={0.18} smoothness={4}>
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.7}
          roughness={0.08}
          metalness={0}
          transmission={0.65}
          thickness={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.5}
        />
      </RoundedBox>
    </group>
  )
}

function Scene({ hoveredRef }: { hoveredRef: RefObject<boolean> }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#455ce9" />
      <Suspense fallback={null}>
        <Environment preset="studio" />
        <AlignerModel hoveredRef={hoveredRef} />
      </Suspense>
    </>
  )
}

export default function InvisalignViewer() {
  // @react-three/fiber's <Canvas> relies on browser-only APIs and crashes
  // during Next.js server-side rendering/static export, so it's only
  // mounted client-side after hydration.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Plain ref (not state) so hovering doesn't re-render/re-subscribe the
  // 60fps useFrame loop — only the rotation math reads it, every frame.
  const hoveredRef = useRef(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onMouseEnter={() => {
        hoveredRef.current = true
      }}
      onMouseLeave={() => {
        hoveredRef.current = false
      }}
      className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-card bg-graphite shadow-inset-ring"
    >
      {mounted && (
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }} gl={{ alpha: true }}>
          <Scene hoveredRef={hoveredRef} />
        </Canvas>
      )}
    </motion.div>
  )
}
