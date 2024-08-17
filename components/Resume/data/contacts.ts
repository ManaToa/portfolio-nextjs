import { LucideIcon, Mail } from 'lucide-react'
import { IconType } from 'react-icons'
import { FaLinkedin } from 'react-icons/fa'

export type ContactLinkType = {
  Icon: LucideIcon | IconType
  link: string
  text: string
  title: string
}

export const CONTACT_DATA: ContactLinkType[] = [
  {
    Icon: Mail,
    link: 'mailto:kenania@manatoa.dev',
    text: 'kenania@manatoa.dev',
    title: 'Envoyer un email à Kenania Dauphin',
  },
  {
    Icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/kenaniadauphin/',
    text: 'Kenania Dauphin',
    title: 'Consulter le profil LinkedIn de Kenania Dauphin',
  },
]
