// utilitaires Zustand stores
export function updateRecord<T>(
  record: Record<string, T>,
  key: string,
  patch: Partial<T>
): Record<string, T> {
  return {
    ...record,
    [key]: { ...record[key], ...patch },
  }
}
