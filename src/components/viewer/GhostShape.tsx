'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Tetrahedron vertices
const VERTICES = [
  new THREE.Vector3(0, 1.2, 0), // top
  new THREE.Vector3(-1.04, -0.6, 0.6), // bottom-left front
  new THREE.Vector3(1.04, -0.6, 0.6), // bottom-right front
  new THREE.Vector3(0, -0.6, -1.2), // bottom back
]

// Tetrahedron edges
const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [2, 3],
  [3, 1],
]

// Line material
const LINE_MATERIAL = new THREE.LineBasicMaterial({ color: '#F26522' })

export default function GhostShape() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <group ref={meshRef}>
      {EDGES.map(([a, b], i) => {
        const points = [VERTICES[a], VERTICES[b]]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const line = new THREE.Line(geometry, LINE_MATERIAL)
        return <primitive key={i} object={line} />
      })}
    </group>
  )
}
