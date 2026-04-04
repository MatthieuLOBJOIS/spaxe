import { RefObject, useRef } from 'react'
import { TransformControls } from '@react-three/drei'
import type { TransformControls as TransformControlsImpl } from 'three-stdlib'
import * as THREE from 'three'

import { useGizmoControls } from '@/hooks/useGizmoControls'
import { ManualDelta } from '@/types/transform'

interface GizmoTranslateProps {
  meshRef: RefObject<THREE.Mesh>
  partFile: string
  basePosition: ManualDelta['translation']
  geometryOffset: THREE.Vector3
}

export default function GizmoTranslate({
  meshRef,
  partFile,
  basePosition,
  geometryOffset,
}: GizmoTranslateProps) {
  const controlsRef = useRef<TransformControlsImpl>(null)

  const { handleMouseDown, handleMouseUp, handleChange } = useGizmoControls({
    meshRef,
    partFile,
    mode: 'translate',
    basePosition,
    geometryOffset,
  })

  return (
    <TransformControls
      ref={controlsRef}
      object={meshRef}
      mode="translate"
      size={0.8}
      space="world"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onChange={handleChange}
    />
  )
}
