export interface Step {
  num: string
  title: string
  desc: string
}

export const STEPS: Step[] = [
  {
    num: '01',
    title: 'Import your STL',
    desc: 'Drop a single STL or a full assembly folder with an assembly.json config. Spaxe detects the format automatically.',
  },
  {
    num: '02',
    title: 'Explore in 3D',
    desc: 'Rotate, zoom, and pan your assembly. Click any part to select it and see its position in the hierarchy.',
  },
  {
    num: '03',
    title: 'Build your view',
    desc: 'Use transform handles to manually position parts and build your own exploded view. Attach docs and links to parts.',
  },
  {
    num: '04',
    title: 'Share or embed',
    desc: 'Export your assembly as an embeddable iframe or share a direct URL with your team.',
  },
]
