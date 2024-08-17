import { FC } from 'react'
import { TrainingType } from '../Resume/data/trainings'

export const TrainingItem: FC<TrainingType> = ({ Icon, title, location, date }) => {
  return (
    <div className='flex cursor-pointer items-center gap-2 rounded p-1 hover:bg-muted/30'>
      <span className='rounded-lg bg-accent p-4 text-primary'>
        <Icon />
      </span>
      <div className='flex-1'>
        <p className='font-medium leading-5'>{title}</p>
        <div className='flex items-center gap-1 text-sm'>
          <p className='text-muted-foreground'>{location}</p>
          <p>•</p>
          <p className='text-muted-foreground'>{date}</p>
        </div>
      </div>
    </div>
  )
}
