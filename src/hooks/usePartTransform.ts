import * as THREE from 'three'
import { useTransformStore } from '@/store/transformStore'
import { DEFAULT_DELTA } from '@/config/workspace/modals/defaultTransform'
import { ManualDelta } from '@/types/viewer'

export function usePartTransform(
  partFile: string,
  basePosition: ManualDelta['translation'],
  baseRotation: ManualDelta['rotation']
) {
  const manualDelta = useTransformStore(
    (s) => s.manualDeltas[partFile] ?? DEFAULT_DELTA
  )

  const finalPosition: ManualDelta['translation'] = [
    basePosition[0] + manualDelta.translation[0],
    basePosition[1] + manualDelta.translation[1],
    basePosition[2] + manualDelta.translation[2],
  ]

  const finalRotation: ManualDelta['rotation'] = [
    baseRotation[0] + THREE.MathUtils.degToRad(manualDelta.rotation[0]),
    baseRotation[1] + THREE.MathUtils.degToRad(manualDelta.rotation[1]),
    baseRotation[2] + THREE.MathUtils.degToRad(manualDelta.rotation[2]),
  ]

  return { finalPosition, finalRotation, manualDelta }
}
