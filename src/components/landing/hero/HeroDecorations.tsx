export default function HeroDecorations() {
  return (
    <svg
      className="absolute bottom-0 right-0 z-0 opacity-15 pointer-events-none text-primary"
      width="500"
      height="500"
      viewBox="0 0 500 500"
    >
      <polygon
        points="500,500 0,500 500,0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <polygon
        points="500,500 150,500 500,150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <polygon
        points="500,500 300,500 500,300"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  )
}
