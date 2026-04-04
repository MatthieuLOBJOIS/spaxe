import { useAssemblyStore } from '@/store/assemblyStore'
import { useTransformStore } from '@/store/transformStore'
import { useColorStore } from '@/store/colorStore'
import { useNeighborhoodStore } from '@/store/neighborhoodStore'
import { useXRayStore } from '@/store/xrayStore'
import { useSceneStore } from '@/store/sceneStore'
import { useModalStore } from '@/store/modalStore'
import { useCameraStore } from '@/store/cameraStore'

export function resetAllStores() {
  useAssemblyStore.getState().reset()
  useTransformStore.getState().reset()
  useColorStore.getState().reset()
  useNeighborhoodStore.getState().reset()
  useXRayStore.getState().reset()
  useSceneStore.getState().reset()
  useModalStore.getState().reset()
  useCameraStore.getState().reset()
}
