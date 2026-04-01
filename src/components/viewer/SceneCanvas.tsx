'use client'

import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Bounds, Center } from '@react-three/drei'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import * as THREE from 'three'

import { Assembly } from '@/types/assembly'
import AssemblyViewer from './AssemblyViewer'
import GhostShape from './GhostShape'
import CameraSync from './CameraSync'
import { useAssemblyStore } from '@/store/assemblyStore'

interface SceneCanvasProps {
  assembly?: Assembly | null
  basePath?: string
  interactive?: boolean
  orthoMode?: boolean
  showGhost?: boolean
  cameraQuatRef?: React.RefObject<THREE.Quaternion>
  navQuatRef?: React.RefObject<THREE.Quaternion>
}

export default function SceneCanvas({
  assembly,
  basePath,
  interactive = true,
  orthoMode = false,
  showGhost = false,
  cameraQuatRef,
  navQuatRef,
}: SceneCanvasProps) {
  const orbitRef = useRef<OrbitControlsImpl>(null)

  const clearSelection = useAssemblyStore((s) => s.clearSelection)

  const hasAssembly = !!(assembly && basePath)

  return (
    <Canvas
      orthographic={orthoMode}
      camera={{
        fov: 50,
        position: [3, 2, 3],
        near: 0.001,
        far: 100000,
      }}
      onPointerMissed={() => {
        clearSelection()
      }}
      style={{
        width: '100%',
        height: '100%',
        background: hasAssembly ? '#0a0a0a' : 'transparent',
      }}
    >
      {/* Lights */}
      <ambientLight intensity={2} color="#ffffff" />
      <directionalLight position={[5, 8, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={1} color="#ffffff" />

      {/* Camera sync */}
      <CameraSync
        hasAssembly={hasAssembly}
        cameraQuatRef={cameraQuatRef}
        navQuatRef={navQuatRef}
        orbitRef={orbitRef}
      />

      {/* Scene */}
      <Suspense fallback={null}>
        {hasAssembly ? (
          <Bounds fit clip margin={1.2}>
            <Center>
              <AssemblyViewer parts={assembly!.parts} basePath={basePath!} />
            </Center>
          </Bounds>
        ) : showGhost ? (
          <GhostShape />
        ) : null}
      </Suspense>

      {/* Controls */}
      <OrbitControls
        ref={orbitRef}
        enablePan={interactive}
        enableZoom={interactive}
        enableRotate={interactive}
        dampingFactor={0.05}
        enableDamping
        makeDefault
      />
    </Canvas>
  )
}
