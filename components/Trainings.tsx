import { LucideIcon } from 'lucide-react'

export type TrainingProps = {
  Icon: LucideIcon
  title: string
  location: string
  date: string
}

export const Training = (props: TrainingProps) => {
  return (
    <div className='flex cursor-pointer items-center gap-2 rounded p-1 hover:bg-muted/30'>
      <span className='rounded-lg bg-accent p-4 text-primary'>
        <props.Icon />
      </span>
      <div className='flex-1'>
        <p className='font-medium leading-5'>{props.title}</p>
        <div className='flex items-center gap-1 text-sm'>
          <p className='text-muted-foreground'>{props.location}</p>
          <p>•</p>
          <p className='text-muted-foreground'>{props.date}</p>
        </div>
      </div>
    </div>
  )
}
