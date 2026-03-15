export interface PartMetadata {
  material?: string;
  doc_url?: string;
  pdf_url?: string;
}

export interface Part {
  file: string;
  label: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: [number, number, number];
  parent: string | null;
  children: string[];
  color_hint?: string;
  joint?: string;
  metadata?: PartMetadata;
}

export interface Assembly {
  name: string;
  description?: string;
  unit: string;
  coordinate_system?: string;
  parts: Part[];
}

export interface Demo {
  id: string;
  label: string;
  description: string;
  thumbnail: string;
  assembly: string;
}

export interface DemoIndex {
  demos: Demo[];
}
