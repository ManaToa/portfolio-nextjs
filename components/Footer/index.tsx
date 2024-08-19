import Link from 'next/link'
import { Section } from '../Section'

/**
 * Composant Footer
 * @returns {JSX.Element} Affiche l'auteur et un lien vers le code source
 */

export const Footer = (): JSX.Element => {
  return (
    <footer className='mt-20'>
      <Section className='flex h-20 items-center justify-center gap-1'>
        <p className='font-light'>Créé par Kenania Dauphin </p>
        <Link
          href='https://github.com/ManaToa/portfolio-nextjs/tree/prod'
          target='_blank'
          title='Consulter le code source de mon portfolio sur GitHub'
          className='font-bold'
        >
          • Voir sur Github
        </Link>
      </Section>
    </footer>
  )
}
