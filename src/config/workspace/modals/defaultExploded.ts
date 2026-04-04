export type Axis = 'all' | 'x' | 'y' | 'z'

export const AXES: { id: Axis; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'x', label: 'X' },
  { id: 'y', label: 'Y' },
  { id: 'z', label: 'Z' },
]
