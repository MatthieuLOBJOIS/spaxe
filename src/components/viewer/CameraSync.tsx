'use client'

import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import * as THREE from 'three'

import { useCameraFrame } from '@/hooks/camera/useCameraFrame'
import { useCameraInit } from '@/hooks/camera/useCameraInit'

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
  useCameraInit(hasAssembly)
  useCameraFrame(cameraQuatRef, navQuatRef, orbitRef)
  return null
}
