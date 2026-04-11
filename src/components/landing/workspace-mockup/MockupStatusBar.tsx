export default function MockupStatusBar() {
  return (
    <div className="h-7 bg-card border-t border-white/6 flex items-center px-3.5 gap-4">
      <span className="text-white/20 text-[9px] font-mono">assembly.spaxe</span>
      <span className="text-white/20 text-[9px] font-mono">STL</span>
      <span className="text-white/20 text-[9px] font-mono">6 parts loaded</span>
      <div className="flex-1" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
    </div>
  )
}
