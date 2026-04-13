'use client'

import { useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import * as THREE from 'three'
import { useCameraStore } from '@/store/cameraStore'

interface CameraSyncProps {
  hasAssembly: boolean
  cameraQuatRef?: React.RefObject<THREE.Quaternion>
  navQuatRef?: React.RefObject<THREE.Quaternion>
  orbitRef?: React.RefObject<OrbitControlsImpl | null>
}

export default function CameraSync({
  hasAssembly,
  cameraQuatRef,
  navQuatRef,
  orbitRef,
}: CameraSyncProps) {
  const { camera } = useThree()

  const setCameraQuaternion = useCameraStore((s) => s.setCameraQuaternion)
  const cameraTarget = useCameraStore((s) => s.cameraTarget)
  const setCameraTarget = useCameraStore((s) => s.setCameraTarget)

  // Initial camera position
  useEffect(() => {
    if (hasAssembly) {
      camera.position.set(2, 1.5, 3)
    } else {
      camera.position.set(0, 0, 5)
    }
    camera.lookAt(0, 0, 0)
  }, [hasAssembly, camera])

  // Per-frame sync
  useFrame(() => {
    // NavCube drag → update main camera
    if (navQuatRef?.current && navQuatRef.current.w !== 1) {
      const distance = camera.position.length()
      const newPos = new THREE.Vector3(0, 0, distance).applyQuaternion(
        navQuatRef.current
      )
      camera.position.copy(newPos)
      camera.lookAt(0, 0, 0)
      if (orbitRef?.current) {
        orbitRef.current.target.set(0, 0, 0)
        orbitRef.current.update()
      }
    }

    if (cameraQuatRef?.current) cameraQuatRef.current.copy(camera.quaternion)
    setCameraQuaternion(camera.quaternion)

    // Animate toward camera target
    if (cameraTarget) {
      const currentDistance = camera.position.length()
      const normalizedTarget = cameraTarget
        .clone()
        .normalize()
        .multiplyScalar(currentDistance)
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
