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
    title: `Développement site web`,
    description: `Next JS, TypeScript, Tailwind CSS`,
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
    description: `React JS, Tailwind CSS`,
    badge: 'Mission',
  },
  {
    Icon: Code,
    title: `Développement site web`,
    description: `HTML, CSS`,
    badge: 'Mission',
  },
]
