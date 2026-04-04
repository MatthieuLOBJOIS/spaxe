'use client'

import { useRouter } from 'next/navigation'
import { resetAllStores } from '@/lib/resetAllStores'
import { INTERNAL_LINKS } from '@/config/landing/links'

export default function BackButton() {
  const router = useRouter()

  const handleBack = () => {
    resetAllStores()
    router.push(INTERNAL_LINKS.home.href)
  }

  return (
    <button
      onClick={handleBack}
      className="px-3.5 py-1.5 rounded-md border border-white/8 text-white/40 text-[13px] cursor-pointer transition-colors duration-150 hover:text-white hover:border-white/20"
    >
      Back
    </button>
  )
}
