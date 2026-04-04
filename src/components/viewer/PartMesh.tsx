'use client'

import { useRef, useMemo } from 'react'
import { useLoader, ThreeEvent } from '@react-three/fiber'
import { STLLoader } from 'three-stdlib'
import { Outlines } from '@react-three/drei'
import * as THREE from 'three'

import GizmoTranslate from '@/components/viewer/GizmoTranslate'
import GizmoRotate from '@/components/viewer/GizmoRotate'

import { useModalStore } from '@/store/modalStore'
import { useAssemblyStore } from '@/store/assemblyStore'
import { useColorStore } from '@/store/colorStore'
import { useTransformStore } from '@/store/transformStore'
import { usePartTransform } from '@/hooks/usePartTransform'

import { getPartColor, getSTLUrl, hasTransforms } from '@/lib/assemblyLoader'
import { Part } from '@/types/assembly'
import { ManualDelta } from '@/types/transform'
import { DEFAULT_DELTA } from '@/config/workspace/modals/defaultTransform'

interface PartMeshProps {
  part: Part
  basePath: string
}

export default function PartMesh({ part, basePath }: PartMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null!)

  const url = getSTLUrl(basePath, part.file)
  const geometry = useLoader(STLLoader, url)

  const { centeredGeometry, geometryOffset } = useMemo(() => {
    const clone = geometry.clone()
    clone.computeBoundingBox()
    const offset = new THREE.Vector3()
    clone.boundingBox!.getCenter(offset)
    clone.center()
    return { centeredGeometry: clone, geometryOffset: offset }
  }, [geometry])

  const baseColor = getPartColor(part)

  const selectedParts = useAssemblyStore((s) => s.selectedParts)
  const setSelectedPart = useAssemblyStore((s) => s.setSelectedPart)
  const isVisible = useAssemblyStore((s) => s.visibleParts[part.file] ?? true)

  const finalColor = useColorStore((s) => s.partColors[part.file] ?? baseColor)
  const finalOpacity = useColorStore((s) => s.partOpacity[part.file] ?? 1)

  const isTransformOpen = useModalStore((s) => s.modals['transform'].isOpen)
  const transformMode = useTransformStore((s) => s.transformMode)

  const basePosition = (
    hasTransforms(part) ? part.position : DEFAULT_DELTA.translation
  ) as ManualDelta['translation']
  const baseRotation = (
    hasTransforms(part) ? part.rotation : DEFAULT_DELTA.rotation
  ) as ManualDelta['rotation']

  const { finalPosition: baseComputedPosition, finalRotation } =
    usePartTransform(part.file, basePosition, baseRotation)

  const finalPosition: ManualDelta['translation'] = [
    baseComputedPosition[0] + geometryOffset.x,
    baseComputedPosition[1] + geometryOffset.y,
    baseComputedPosition[2] + geometryOffset.z,
  ]

  const isSelected = selectedParts.includes(part.file)

  const primaryPart = selectedParts[0]
  const isPrimary = part.file === primaryPart

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    if (e.delta > 2) return
    setSelectedPart(part.file, e.ctrlKey || e.metaKey)
  }

  if (!isVisible) return null

  return (
    <>
      <mesh
        ref={meshRef}
        geometry={centeredGeometry}
        position={finalPosition}
        rotation={finalRotation}
        onClick={handleClick}
        renderOrder={finalOpacity < 1 ? 1 : 0}
      >
        <meshStandardMaterial
          key={finalOpacity < 1 ? 'transparent' : 'opaque'}
          color={finalColor}
          roughness={0.6}
          metalness={0.2}
          transparent={finalOpacity < 1}
          opacity={finalOpacity}
          depthWrite={finalOpacity >= 1}
        />
        {isSelected && <Outlines thickness={3} color="#22d3ee" />}
      </mesh>

      {isPrimary && isTransformOpen && transformMode === 'translate' && (
        <GizmoTranslate
          meshRef={meshRef}
          partFile={part.file}
          basePosition={basePosition}
          geometryOffset={geometryOffset}
        />
      )}
      {isPrimary && isTransformOpen && transformMode === 'rotate' && (
        <GizmoRotate
          meshRef={meshRef}
          partFile={part.file}
          baseRotation={baseRotation}
        />
      )}
    </>
  )
}
