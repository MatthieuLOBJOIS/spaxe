'use client'

import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Bounds, Center } from '@react-three/drei'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import * as THREE from 'three'
import { Assembly } from '@/types/assembly'
import { loadAssembly } from '@/lib/assemblyLoader'
import AssemblyViewer from './AssemblyViewer'
import GhostCube from './GhostCube'
import { useViewerStore } from '@/store/viewerStore'

function CameraSync({ 
  cameraQuatRef, 
  navQuatRef,
  orbitRef,
}: { 
  cameraQuatRef?: React.RefObject<THREE.Quaternion>
  navQuatRef?: React.RefObject<THREE.Quaternion>
  orbitRef?: React.RefObject<OrbitControlsImpl | null>
}) {
  const { camera } = useThree()
  const setCameraQuaternion = useViewerStore(s => s.setCameraQuaternion)
  const cameraTarget = useViewerStore(s => s.cameraTarget)
  const setCameraTarget = useViewerStore(s => s.setCameraTarget)

useFrame(() => {
  // Si navQuatRef a une valeur non-identity → NavCube drag en cours
  if (navQuatRef?.current && navQuatRef.current.w !== 1) {
    const distance = camera.position.length()
    const newPos = new THREE.Vector3(0, 0, distance).applyQuaternion(navQuatRef.current)
    camera.position.copy(newPos)
    camera.lookAt(0, 0, 0)
    if (orbitRef?.current) {
      orbitRef.current.target.set(0, 0, 0)
      orbitRef.current.update()
    }
  }

  if (cameraQuatRef?.current) cameraQuatRef.current.copy(camera.quaternion)
  setCameraQuaternion(camera.quaternion)

  if (cameraTarget) {
    const currentDistance = camera.position.length()
    const normalizedTarget = cameraTarget.clone().normalize().multiplyScalar(currentDistance)
    camera.position.lerp(normalizedTarget, 0.1)
    camera.lookAt(0, 0, 0)
    if (orbitRef?.current) {
      orbitRef.current.target.set(0, 0, 0)
      orbitRef.current.update()
    }
    if (camera.position.distanceTo(normalizedTarget) < 1) {
      camera.position.copy(normalizedTarget)
      setCameraTarget(null)
    }
  }
})

  return null
}

function CameraReset({ isDemo }: { isDemo: boolean }) {
  const { camera } = useThree()
  useEffect(() => {
    if (!isDemo) camera.position.set(3, 2, 3)
    else { camera.position.set(2, 1.5, 3); camera.lookAt(0, 0, 0) }
  }, [isDemo, camera])
  return null
}

interface SceneCanvasProps {
  assemblyUrl?: string
  basePath?: string
  interactive?: boolean
  orthoMode?: boolean
  cameraQuatRef: React.RefObject<THREE.Quaternion>
  navQuatRef: React.RefObject<THREE.Quaternion>
}

export default function SceneCanvas({
  assemblyUrl,
  basePath,
  interactive = true,
  orthoMode = false,
  cameraQuatRef,
  navQuatRef,
}: SceneCanvasProps) {
  const [assembly, setAssembly] = useState<Assembly | null>(null)
  const orbitRef = useRef<OrbitControlsImpl>(null)

  useEffect(() => {
    if (!assemblyUrl) return
    loadAssembly(assemblyUrl).then(setAssembly).catch(console.error)
  }, [assemblyUrl])

  const isDemo = assembly && basePath

  return (
    <Canvas
      orthographic={orthoMode}
      camera={{ fov: 50, position: [3, 2, 3], near: 0.001, far: 100000 }}
      style={{ width: '100%', height: '100%', background: '#0a0a0a' }}
    >
      <ambientLight intensity={2} color="#ffffff" />
      <directionalLight position={[5, 8, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={1} color="#ffffff" />

      <CameraReset isDemo={!!isDemo} />
      <CameraSync cameraQuatRef={cameraQuatRef} navQuatRef={navQuatRef} orbitRef={orbitRef} />

      <Suspense fallback={null}>
        {isDemo ? (
          <Bounds fit clip margin={1.2}>
            <Center>
              <AssemblyViewer parts={assembly.parts} basePath={basePath} />
            </Center>
          </Bounds>
        ) : (
          <GhostCube />
        )}
      </Suspense>

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