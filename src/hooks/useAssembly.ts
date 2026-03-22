import { useState, useEffect } from 'react'
import { Assembly } from '@/types/assembly'
import { loadAssembly } from '@/lib/assemblyLoader'

export function useAssembly(assemblyUrl: string) {
  const [assembly, setAssembly] = useState<Assembly | null>(null)

  useEffect(() => {
    loadAssembly(assemblyUrl).then(setAssembly).catch(console.error)
  }, [assemblyUrl])

  return assembly
}
