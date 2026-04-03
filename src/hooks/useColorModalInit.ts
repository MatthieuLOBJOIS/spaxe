import { useAssemblyStore } from '@/store/assemblyStore'
import { useColorStore } from '@/store/colorStore'
import { getEffectiveColor } from '@/lib/assemblyLoader'
import { Assembly } from '@/types/assembly'

// si assembly est déjà chargé récupère la couleur actuelle de la pièce sélectionnée à l'ouverture du modal
export function useColorModalInit(assembly: Assembly | null) {
  const selectedParts = useAssemblyStore((s) => s.selectedParts)
  const partColors = useColorStore((s) => s.partColors)
  const partOpacity = useColorStore((s) => s.partOpacity)

  const firstFile = selectedParts[0] ?? null
  const firstPart = assembly?.parts.find((p) => p.file === firstFile) ?? null

  const initialColor = firstPart
    ? getEffectiveColor(firstPart, partColors)
    : '#d46800'
  const initialOpacity = firstFile
    ? Math.round((partOpacity[firstFile] ?? 1) * 100)
    : 100

  return { firstFile, initialColor, initialOpacity }
}
