import { RefObject } from 'react'
import { TransformControls } from '@react-three/drei'
import * as THREE from 'three'

import { useTransformStore } from '@/store/transformStore'
import { useCameraStore } from '@/store/cameraStore'
import { ManualDelta } from '@/types/transform'

interface GizmoRotateProps {
  meshRef: RefObject<THREE.Mesh>
  partFile: string
  baseRotation: ManualDelta['rotation']
}

export default function GizmoRotate({
  meshRef,
  partFile,
  baseRotation,
}: GizmoRotateProps) {
  const setManualDelta = useTransformStore((s) => s.setManualDelta)
  const setOrbitEnabled = useCameraStore((s) => s.setOrbitEnabled)

  const handleMouseDown = () => setOrbitEnabled(false)

  const handleMouseUp = () => {
    setOrbitEnabled(true)
    if (!meshRef.current) return
    const rot = meshRef.current.rotation
    setManualDelta(partFile, {
      rotation: [
        THREE.MathUtils.radToDeg(rot.x) - baseRotation[0],
        THREE.MathUtils.radToDeg(rot.y) - baseRotation[1],
        THREE.MathUtils.radToDeg(rot.z) - baseRotation[2],
      ],
    })
  }

  return (
    <TransformControls
      object={meshRef}
      mode="rotate"
      size={0.8}
      space="local"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  )
}
