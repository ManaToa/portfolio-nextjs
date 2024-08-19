import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { PiArrowUpRight } from 'react-icons/pi'
import { ContactLinkType } from '../Resume/data/contacts'
import { buttonVariants } from '../ui/button'

/**
 * Composant ContactLink
 * @param {LucideIcon | IconType} props.Icon Icône du lien
 * @param {string} props.link Lien vers lequel rediriger
 * @param {string} props.text Texte à afficher
 * @param {string} props.title Titre du lien
 * @returns {JSX.Element} Un lien de contact
 */

export const ContactLink = ({ Icon, link, text, title }: ContactLinkType): JSX.Element => {
  return (
    <Link
      href={link}
      title={title}
      className={cn(
        buttonVariants({ variant: 'link' }),
        'group my-[0.1rem] flex items-center justify-start gap-2 text-lg font-light',
      )}
    >
      <Icon className='size-5' />
      <span>{text}</span>
      <PiArrowUpRight className='text-lg transition-all duration-100 group-hover:-translate-y-1 group-hover:translate-x-1' />
    </Link>
  )
}
