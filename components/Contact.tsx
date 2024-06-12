import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { PiArrowUpRight } from 'react-icons/pi'
import { buttonVariants } from './ui/button'

export type ContactProps = {
  Icon: LucideIcon | IconType
  link: string
  text: string
}

export const Contact = (props: ContactProps) => {
  return (
    <Link
      href={props.link}
      className={cn(
        buttonVariants({ variant: 'link' }),
        'group my-[0.1rem] flex items-center justify-start gap-2 text-lg font-light',
      )}
    >
      <props.Icon className='size-5' />
      <span>{props.text}</span>
      <PiArrowUpRight className='text-lg transition-all duration-100 group-hover:-translate-y-1 group-hover:translate-x-1' />
    </Link>
  )
}
