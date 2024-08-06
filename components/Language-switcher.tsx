'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const locale = searchParams.get('locale') || 'fr'
  const locales = ['en', 'fr']
  return (
    <Button variant='outline' className='h-6 p-1'>
      <Link href={'#'}>
        <Image
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${locale === 'fr' ? 'FR' : 'GB'}.svg`}
          alt='english flag'
          width={20}
          height={20}
        />
      </Link>
    </Button>
  )
}
