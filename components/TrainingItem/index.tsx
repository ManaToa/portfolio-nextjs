import { LucideIcon } from 'lucide-react'
import { FC } from 'react'
import { TrainingType } from '../Resume/data/trainings'

/**
 * Composant TrainingItem
 * @param {LucideIcon} props.Icon Icône de la formation
 * @param {string} props.title Titre de la formation
 * @param {string} props.location Lieu de la formation
 * @param {string} props.date Date de la formation
 * @returns {JSX.Element} Un élément affichant une formation
 */

export const TrainingItem: FC<TrainingType> = ({
  Icon,
  title,
  location,
  date,
}: TrainingType): JSX.Element => {
  return (
    <div className='flex cursor-pointer items-center gap-2 rounded p-1 hover:bg-muted/30 max-md:items-start'>
      <span className='rounded-lg bg-accent p-4 text-primary'>
        <Icon />
      </span>
      <div className='flex-1'>
        <p className='font-medium leading-5'>{title}</p>
        <div className='flex items-center gap-1 text-sm max-md:flex-col max-md:items-start'>
          <p className='text-muted-foreground'>{location}</p>
          <p className='max-md:hidden'>•</p>
          <p className='text-muted-foreground'>{date}</p>
        </div>
      </div>
    </div>
  )
}
