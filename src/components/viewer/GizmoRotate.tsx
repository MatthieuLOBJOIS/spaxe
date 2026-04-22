import { RefObject, useRef } from 'react'
import { TransformControls } from '@react-three/drei'
import type { TransformControls as TransformControlsImpl } from 'three-stdlib'
import * as THREE from 'three'

import { useGizmoControls } from '@/hooks/useGizmoControls'
import type { Vec3 } from '@/types/viewer'

interface GizmoRotateProps {
  meshRef: RefObject<THREE.Mesh>
  partFile: string
  baseRotation: Vec3
}

export default function GizmoRotate({
  meshRef,
  partFile,
  baseRotation,
}: GizmoRotateProps) {
  const controlsRef = useRef<TransformControlsImpl>(null)

  const { handleMouseDown, handleMouseUp, handleChange } = useGizmoControls({
    meshRef,
    partFile,
    mode: 'rotate',
    baseRotation,
  })

  return (
    <TransformControls
      ref={controlsRef}
      object={meshRef}
      mode="rotate"
      size={0.8}
      space="local"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onChange={handleChange}
    />
  )
}
