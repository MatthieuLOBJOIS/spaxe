'use client'

interface Step {
  num: string
  title: string
  desc: string
}

const steps: Step[] = [
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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#141416] px-[12%] py-[120px]">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex px-3 py-[5px] bg-[rgba(242,101,34,0.1)] border border-[rgba(242,101,34,0.25)] rounded-full mb-5">
          <span className="text-[#F26522] text-[11px] font-mono tracking-[1px]">
            HOW IT WORKS
          </span>
        </div>
        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-[-1px] m-0">
          From file to interactive
          <br />
          assembly in seconds.
        </h2>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-2 gap-8">
        {steps.map(({ num, title, desc }) => (
          <div
            key={num}
            className="flex gap-6 p-8 bg-[#1a1a1c] rounded-xl border border-white/[0.07]"
          >
            <span className="text-[#F26522] font-mono text-[32px] font-bold opacity-40 shrink-0 leading-none">
              {num}
            </span>
            <div className="flex flex-col gap-2.5">
              <span className="text-white font-bold text-lg">{title}</span>
              <span className="text-white/40 text-sm leading-relaxed">
                {desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden -mx-6 px-6">
        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="flex gap-5 p-6 bg-[#1a1a1c] rounded-xl border border-white/[0.07] snap-start shrink-0 w-[80vw]"
            >
              <span className="text-[#F26522] font-mono text-[28px] font-bold opacity-40 shrink-0 leading-none">
                {num}
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold text-base">{title}</span>
                <span className="text-white/40 text-sm leading-relaxed">
                  {desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
