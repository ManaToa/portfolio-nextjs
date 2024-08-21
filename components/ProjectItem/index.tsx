import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ProjectItemType } from '../Resume/data/projects'

/**
 * Composant ProjectItem
 * @param {LucideIcon} props.Icon Icône du projet
 * @param {string} props.title Titre du projet
 * @param {string} props.description Description du projet
 * @param {string} props.link Lien vers le projet (optionnel)
 * @param {string} props.badge Badge à afficher (optionnel)
 * @returns {JSX.Element} Un projet réalisé
 */

export const ProjectItem = ({
  Icon,
  title,
  description,
  badge,
  link,
}: ProjectItemType): JSX.Element => {
  const content = (
    <>
      <span className='rounded-lg bg-accent p-3 text-primary'>
        <Icon size={25} role='img' />
      </span>
      <div>
        <div className='flex-1'>
          <p className='font-medium leading-7 [&:not(:first-child)]:mt-6'>{title}</p>
          <p className='text-sm text-muted-foreground'>{description}</p>
        </div>
      </div>
    </>
  )
  return link ? (
    <Link
      href={link}
      target='_blank'
      className='flex cursor-pointer items-start gap-2 rounded p-1 hover:bg-muted/30'
      title={`Voir le projet ${title}`}
    >
      {content}
    </Link>
  ) : (
    <div className='flex cursor-pointer items-start gap-2 rounded p-1 hover:bg-muted/30'>
      {content}
    </div>
  )
}
