// Composant d'entrée XYZ réutilisable pour position et rotation

const AXES = [
  { label: 'X', color: 'text-[#E85C5C]' },
  { label: 'Y', color: 'text-[#6BC668]' },
  { label: 'Z', color: 'text-[#5B9EE8]' },
]

type XYZInputProps = {
  label: string
  values: [number, number, number]
  onChange: (axis: 0 | 1 | 2, value: number) => void
}

export default function XYZInput({ label, values, onChange }: XYZInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-white/30 text-[10px] font-mono tracking-[1px]">
        {label}
      </span>
      <div className="flex gap-2">
        {AXES.map(({ label: axis, color }, i) => (
          <div
            key={axis}
            className="flex-1 flex items-center gap-1.5 bg-white/4 border border-white/8 rounded-lg px-2.5 py-1.5"
          >
            <span
              className={`text-[11px] font-bold font-mono shrink-0 ${color}`}
            >
              {axis}
            </span>
            <input
              type="number"
              value={values[i].toFixed(2)}
              onChange={(e) =>
                onChange(i as 0 | 1 | 2, parseFloat(e.target.value) || 0)
              }
              className="w-full bg-transparent text-white/70 text-[12px] font-mono outline-none text-right"
              step={0.1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
