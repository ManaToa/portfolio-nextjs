import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { Badge } from './ui/badge'

export type ProjectsProps = {
  Icon: LucideIcon
  title: string
  description: string
  badge?: string
  link?: string
}

export const Projects = (props: ProjectsProps) => {
  const content = (
    <>
      <span className='rounded-lg bg-accent p-3 text-primary'>
        <props.Icon size={25} />
      </span>
      <div className='flex-1'>
        <p className='font-medium leading-7 [&:not(:first-child)]:mt-6'>{props.title}</p>
        <p className='text-sm text-muted-foreground'>{props.description}</p>
      </div>
      {props.badge && <Badge variant={'outline'}>{props.badge}</Badge>}
    </>
  )
  return props.link ? (
    <Link
      href={props.link}
      target={'_blank'}
      className='flex cursor-pointer items-start gap-2 rounded p-1 hover:bg-muted/30'
    >
      {content}
    </Link>
  ) : (
    <div className='flex cursor-pointer items-start gap-2 rounded p-1 hover:bg-muted/30'>
      {content}
    </div>
  )
}
