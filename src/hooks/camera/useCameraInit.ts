import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

/**
 * Sets the initial camera position when the assembly state changes.
 *
 * @param hasAssembly - Whether an assembly is currently loaded.
 */
export function useCameraInit(hasAssembly: boolean) {
  const { camera } = useThree()

  useEffect(() => {
    if (hasAssembly) {
      camera.position.set(2, 1.5, 3)
    } else {
      camera.position.set(0, 0, 5)
    }
    camera.lookAt(0, 0, 0)
  }, [hasAssembly, camera])
}
