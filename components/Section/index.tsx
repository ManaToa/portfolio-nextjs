import { cn } from '@/lib/utils'
import { FC, PropsWithChildren, ReactNode } from 'react'

interface SectionProps {
  className?: string
}

/**
 * Composant Section
 * @param {string} props.className Classes de style à passer à l'enfant (optionnel)
 * @param {ReactNode} props.children Element enfant
 * @returns {JSX.Element} Un bloc avec des propriétés d'affichage prédéfinies
 */

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
}: PropsWithChildren<SectionProps>): JSX.Element => {
  return (
    <section
      className={cn(
        'm-auto max-w-5xl px-4',
        className,
        'text-center sm:px-[4.5rem] md:px-4 md:text-left',
      )}
    >
      {children}
    </section>
  )
}
