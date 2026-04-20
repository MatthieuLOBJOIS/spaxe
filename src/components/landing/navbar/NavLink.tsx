import { InternalLink } from '@/components/ui/InternalLink'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { INTERNAL_LINKS, EXTERNAL_LINKS } from '@/config/global'

interface NavLinkProps {
  className?: string
}

export default function NavLinks({ className }: NavLinkProps) {
  return (
    <>
      <InternalLink
        href={INTERNAL_LINKS.features.href}
        variant="link"
        className={className}
      >
        {INTERNAL_LINKS.features.label}
      </InternalLink>
      <InternalLink
        href={INTERNAL_LINKS.howItWorks.href}
        variant="link"
        className={className}
      >
        {INTERNAL_LINKS.howItWorks.label}
      </InternalLink>
      <ExternalLink
        href={EXTERNAL_LINKS.github.href}
        variant="link"
        className={className}
      >
        {EXTERNAL_LINKS.github.label}
      </ExternalLink>
    </>
  )
}
