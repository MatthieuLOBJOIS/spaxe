'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function GhostShape() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  // Sommets du tétraèdre
  const vertices = [
    new THREE.Vector3(0, 1.2, 0),      // sommet haut
    new THREE.Vector3(-1.04, -0.6, 0.6), // bas gauche avant
    new THREE.Vector3(1.04, -0.6, 0.6),  // bas droite avant
    new THREE.Vector3(0, -0.6, -1.2),    // bas arrière
  ]

  // Arêtes du tétraèdre
  const edges = [
    [0, 1], [0, 2], [0, 3],
    [1, 2], [2, 3], [3, 1],
  ]

  const lineMaterial = new THREE.LineBasicMaterial({ color: '#F26522' })

return (
  <group ref={meshRef}>
    {edges.map(([a, b], i) => {
      const points = [vertices[a], vertices[b]]
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, lineMaterial)
      return <primitive key={i} object={line} />
    })}
  </group>
)
}