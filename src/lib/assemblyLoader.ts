import { Assembly, Part } from "@/types/assembly";

const DEFAULT_COLOR = "#cccccc";

// Détecte si les coordonnées sont dans le STL ou dans le JSON
export function hasTransforms(part: Part): boolean {
  const pos = part.position;
  const rot = part.rotation;
  return (
    pos[0] !== 0 ||
    pos[1] !== 0 ||
    pos[2] !== 0 ||
    rot[0] !== 0 ||
    rot[1] !== 0 ||
    rot[2] !== 0
  );
}

// Charge le fichier assembly.json depuis une URL
export async function loadAssembly(url: string): Promise<Assembly> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load assembly: ${url}`);
  return res.json();
}

// Retourne la couleur d'une pièce ou le défaut gris clair
export function getPartColor(part: Part): string {
  return part.color_hint ?? DEFAULT_COLOR;
}

// Retourne le chemin STL complet depuis le dossier base
export function getSTLUrl(basePath: string, file: string): string {
  return `${basePath}/${file}`;
}

// Retourne les enfants directs d'une pièce
export function getChildren(assembly: Assembly, file: string): Part[] {
  return assembly.parts.filter((p) => p.parent === file);
}

// Retourne le parent d'une pièce
export function getParent(assembly: Assembly, file: string): Part | null {
  const part = assembly.parts.find((p) => p.file === file);
  if (!part?.parent) return null;
  return assembly.parts.find((p) => p.file === part.parent) ?? null;
}
