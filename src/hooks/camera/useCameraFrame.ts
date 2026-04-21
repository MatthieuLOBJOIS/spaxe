import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import { useCameraStore } from '@/store/cameraStore'

/**
 * Syncs the main camera each frame: applies NavCube drag, updates the
 * quaternion store, and animates toward a cameraTarget if one is set.
 *
 * @param cameraQuatRef - Ref written with the camera quaternion each frame.
 * @param navQuatRef - Ref read from the NavCube drag; drives camera rotation.
 * @param orbitRef - OrbitControls ref, updated after each camera mutation.
 */
export function useCameraFrame(
  cameraQuatRef?: React.RefObject<THREE.Quaternion>,
  navQuatRef?: React.RefObject<THREE.Quaternion>,
  orbitRef?: React.RefObject<OrbitControlsImpl | null>
) {
  const { camera } = useThree()
  const setCameraQuaternion = useCameraStore((s) => s.setCameraQuaternion)
  const cameraTarget = useCameraStore((s) => s.cameraTarget)
  const setCameraTarget = useCameraStore((s) => s.setCameraTarget)

  useFrame(() => {
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
}
