import Link from 'next/link'
import { Section } from './Section'

export const Footer = () => {
  return (
    <footer className='mt-20'>
      <Section className='flex h-20 items-center justify-center gap-1'>
        <p className='font-light'>Créé par Kenania Dauphin </p>
        <Link href={'https://github.com/ManaToa'} target='_blank' className='font-bold'>
          • Voir sur Github
        </Link>
      </Section>
    </footer>
  )
}
