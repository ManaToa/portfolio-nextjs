import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Section } from '../Section'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { buttonVariants } from '../ui/button'

/**
 * Composant Header
 * @returns {JSX.Element} Affiche le titre, deux liens (contact et CV), et un bouton pour changer le thème
 */

export const Header = (): JSX.Element => {
  return (
    <header className='top-0 z-20 py-4 backdrop-blur-3xl md:sticky'>
      <Section className='flex items-baseline'>
        <h1 className='text-lg font-bold text-primary'>Kenania Dauphin</h1>
        <div className='flex-1' />
        <ul className='flex items-center gap-2 max-sm:flex-col max-sm:items-end'>
          <Link
            href='mailto:kenaniadauphin@gmail.com'
            className={cn(buttonVariants({ variant: 'link' }), 'h-6 w-auto px-2')}
          >
            Me contacter
          </Link>
          <Link
            href='/downloads/Kenania-Dauphin-CV-Developpeur-Fullstack-2025-Web.pdf'
            target='_blank'
            className={cn(buttonVariants({ variant: 'default' }), 'h-6 w-auto px-2')}
          >
            Mon CV
          </Link>
          <ThemeSwitcher />
        </ul>
      </Section>
    </header>
  )
}
