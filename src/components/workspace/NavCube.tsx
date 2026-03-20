'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Edges, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Axes() {
  const axes = [
    { color: '#ef4444', cylPos: [0.5,0,0] as [number,number,number], cylRot: [0,0,-Math.PI/2] as [number,number,number], conePos: [1.05,0,0] as [number,number,number], coneRot: [0,0,-Math.PI/2] as [number,number,number] },
    { color: '#22c55e', cylPos: [0,0.5,0] as [number,number,number], cylRot: [0,0,0] as [number,number,number], conePos: [0,1.05,0] as [number,number,number], coneRot: [0,0,0] as [number,number,number] },
    { color: '#3b82f6', cylPos: [0,0,0.5] as [number,number,number], cylRot: [Math.PI/2,0,0] as [number,number,number], conePos: [0,0,1.05] as [number,number,number], coneRot: [Math.PI/2,0,0] as [number,number,number] },
  ]
  return (
    <>
      {axes.map(({ color, cylPos, cylRot, conePos, coneRot }, i) => (
        <group key={i}>
          <mesh position={cylPos} rotation={cylRot}>
            <cylinderGeometry args={[0.04, 0.04, 1, 16]} />
            <meshStandardMaterial color={color} />
          </mesh>
          <mesh position={conePos} rotation={coneRot}>
            <coneGeometry args={[0.1, 0.2, 16]} />
            <meshStandardMaterial color={color} />
          </mesh>
        </group>
      ))}
    </>
  )
}

interface NavCubeObjectProps {
  cameraQuatRef: React.RefObject<THREE.Quaternion>
  navQuatRef: React.RefObject<THREE.Quaternion>
}

function NavCubeObject({ cameraQuatRef, navQuatRef }: NavCubeObjectProps) {
  const { camera } = useThree()
  const groupRef = useRef<THREE.Group>(null)
  const isDragging = useRef(false)
  // Quaternion de la NavCam au moment du onEnd
  const endQuat = useRef(new THREE.Quaternion())

  useFrame(() => {
    if (!groupRef.current || !cameraQuatRef.current) return

    if (isDragging.current) {
      // Pendant le drag — transmet la rotation NavCube → scène principale
      navQuatRef.current?.copy(camera.quaternion)
      // Garde la rotation du cube en sync avec la NavCam
      groupRef.current.quaternion.copy(camera.quaternion).invert()
    } else {
      // Pas de drag — sync depuis la scène principale
      groupRef.current.quaternion.copy(cameraQuatRef.current).invert()
    }
  })

  return (
    <>
      <group ref={groupRef}>
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.04} side={THREE.DoubleSide} />
          <Edges color="#ffffff" threshold={15} />
        </mesh>
        <Axes />
      </group>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
        onStart={() => {
          isDragging.current = true
          // Reset navQuatRef au début du drag
          navQuatRef.current?.copy(camera.quaternion)
        }}
        onEnd={() => {
          isDragging.current = false
          // Reset navQuatRef pour éviter les conflits
          navQuatRef.current?.identity()
        }}
      />
    </>
  )
}

interface NavCubeProps {
  cameraQuatRef: React.RefObject<THREE.Quaternion>
  navQuatRef: React.RefObject<THREE.Quaternion>
}

export default function NavCube({ cameraQuatRef, navQuatRef }: NavCubeProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: '24px',
      right: '24px',
      width: '240px',
      height: '240px',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.1)',
      background: '#0f0f0f',
    }}>
      <Canvas camera={{ position: [2.5, 2.5, 2.5], fov: 40 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <NavCubeObject cameraQuatRef={cameraQuatRef} navQuatRef={navQuatRef} />
      </Canvas>
    </div>
  )
}