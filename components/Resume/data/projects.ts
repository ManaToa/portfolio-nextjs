import { Award, Code, LucideIcon } from 'lucide-react'

export type ProjectItemType = {
  Icon: LucideIcon
  title: string
  description: string
  link?: string
  badge?: string
}

export const PROJECTS: ProjectItemType[] = [
  {
    Icon: Code,
    title: `Éveil des Possibles | Cours particuliers`,
    description: `Création d'un site avec NextJS, TypeScript, TailwindCSS, Prisma, PostgreSQL`,
    badge: 'Mission',
    link: `https://eveildespossibles.ch`,
  },
  {
    Icon: Code,
    title: `Développement site web`,
    description: `NextJS, TypeScript, TailwindCSS`,
    badge: 'Mission',
  },
  {
    Icon: Award,
    title: `JavaScript Algorithms Certification`,
    description: `FreeCodeCamp`,
    link: 'https://www.freecodecamp.org/certification/Manatoa/javascript-algorithms-and-data-structures',
  },
  {
    Icon: Award,
    title: `Frontend Development Libraries Certification`,
    description: `FreeCodeCamp`,
    link: `https://www.freecodecamp.org/certification/Manatoa/front-end-development-libraries`,
  },
  {
    Icon: Code,
    title: `Développement site web`,
    description: `ReactJS, TailwindCSS`,
    badge: 'Mission',
  },
]
