export type LogoSize = 'sm' | 'md' | 'lg' | 'toolbar'

export interface LogoSizeConfig {
  text: string
  tracking: string
  triangle: string
}

export interface NavLink {
  href: string
  label: string
}

export type LinkVariants = 'primary' | 'primaryDisabled' | 'outline' | 'link'
