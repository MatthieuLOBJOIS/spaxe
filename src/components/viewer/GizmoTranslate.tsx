import { RefObject, useRef } from 'react'
import { TransformControls } from '@react-three/drei'
import type { TransformControls as TransformControlsImpl } from 'three-stdlib'

import * as THREE from 'three'

import { useTransformStore } from '@/store/transformStore'
import { useCameraStore } from '@/store/cameraStore'
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
  const setManualDelta = useTransformStore((s) => s.setManualDelta)
  const setOrbitEnabled = useCameraStore((s) => s.setOrbitEnabled)

  const handleMouseDown = () => setOrbitEnabled(false)

  const handleMouseUp = () => {
    setOrbitEnabled(true)
    if (!meshRef.current) return
    const pos = meshRef.current.position
    setManualDelta(partFile, {
      translation: [
        pos.x - basePosition[0] - geometryOffset.x,
        pos.y - basePosition[1] - geometryOffset.y,
        pos.z - basePosition[2] - geometryOffset.z,
      ],
    })
  }

  return (
    <TransformControls
      ref={controlsRef}
      object={meshRef}
      mode="translate"
      size={0.8}
      space="world"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  )
}
