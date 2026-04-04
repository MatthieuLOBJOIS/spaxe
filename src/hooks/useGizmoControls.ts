import { RefObject, useRef, useCallback, useEffect } from 'react'
import * as THREE from 'three'

import { useAssemblyStore } from '@/store/assemblyStore'
import { useTransformStore } from '@/store/transformStore'
import { useCameraStore } from '@/store/cameraStore'
import { ManualDelta } from '@/types/transform'

type GizmoMode = 'translate' | 'rotate'

interface UseGizmoControlsProps {
  meshRef: RefObject<THREE.Mesh>
  partFile: string
  mode: GizmoMode
  basePosition?: ManualDelta['translation']
  geometryOffset?: THREE.Vector3
  baseRotation?: ManualDelta['rotation']
}

export function useGizmoControls({
  meshRef,
  partFile,
  mode,
  basePosition,
  geometryOffset,
  baseRotation,
}: UseGizmoControlsProps) {
  const setOrbitEnabled = useCameraStore((s) => s.setOrbitEnabled)

  const basePositionRef = useRef(basePosition)
  const geometryOffsetRef = useRef(geometryOffset)
  const baseRotationRef = useRef(baseRotation)
  const partFileRef = useRef(partFile)

  useEffect(() => {
    basePositionRef.current = basePosition
  }, [basePosition])
  useEffect(() => {
    geometryOffsetRef.current = geometryOffset
  }, [geometryOffset])
  useEffect(() => {
    baseRotationRef.current = baseRotation
  }, [baseRotation])
  useEffect(() => {
    partFileRef.current = partFile
  }, [partFile])

  const handleMouseDown = useCallback(() => {
    setOrbitEnabled(false)
  }, [setOrbitEnabled])

  const handleMouseUp = useCallback(() => {
    setOrbitEnabled(true)
  }, [setOrbitEnabled])

  const handleChange = useCallback(() => {
    if (!meshRef.current) return

    const { manualDeltas, setManualDeltas } = useTransformStore.getState()
    const { selectedParts } = useAssemblyStore.getState()

    const pf = partFileRef.current

    let newDelta: ManualDelta['translation'] | ManualDelta['rotation']
    let field: keyof ManualDelta

    if (mode === 'translate') {
      const pos = meshRef.current.position
      const bp = basePositionRef.current ?? [0, 0, 0]
      const go = geometryOffsetRef.current ?? new THREE.Vector3()
      field = 'translation'
      newDelta = [
        pos.x - bp[0] - go.x,
        pos.y - bp[1] - go.y,
        pos.z - bp[2] - go.z,
      ]
    } else {
      const rot = meshRef.current.rotation
      const br = baseRotationRef.current ?? [0, 0, 0]
      field = 'rotation'
      newDelta = [
        THREE.MathUtils.radToDeg(rot.x) - br[0],
        THREE.MathUtils.radToDeg(rot.y) - br[1],
        THREE.MathUtils.radToDeg(rot.z) - br[2],
      ]
    }

    const oldDelta = manualDeltas[pf!]?.[field] ?? [0, 0, 0]
    const diff = newDelta.map((v, i) => v - oldDelta[i]) as [
      number,
      number,
      number,
    ]

    const updates: Record<string, Partial<ManualDelta>> = {}
    selectedParts.forEach((id) => {
      const current = manualDeltas[id]?.[field] ?? [0, 0, 0]
      updates[id] = {
        [field]: current.map((v, i) => v + diff[i]) as [number, number, number],
      }
    })

    setManualDeltas(updates)
  }, [meshRef, mode])

  return { handleMouseDown, handleMouseUp, handleChange }
}
