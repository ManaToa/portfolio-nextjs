import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Section } from './Section'
import { ModeToggle } from './Toogle-theme'
import { buttonVariants } from './ui/button'

export const Header = () => {
  return (
    <header className='top-0 z-20 py-4 backdrop-blur-3xl md:sticky'>
      <Section className='flex items-baseline'>
        <h1 className='text-lg font-bold text-primary'>Kenania Dauphin</h1>
        <div className='flex-1' />
        <ul className='flex items-center gap-2'>
          <Link
            href={'mailto:kenania@manatoa.dev'}
            className={cn(buttonVariants({ variant: 'link' }), 'h-6 w-auto px-2')}
          >
            Me contacter
          </Link>
          <Link
            href={'/downloads/CV_Kenania-Dauphin-web.pdf'}
            target='_blank'
            className={cn(buttonVariants({ variant: 'default' }), 'h-6 w-auto px-2')}
          >
            Mon CV
          </Link>
          <ModeToggle />
        </ul>
      </Section>
    </header>
  )
}
