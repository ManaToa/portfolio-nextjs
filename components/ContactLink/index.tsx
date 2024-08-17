import { cn } from '@/lib/utils'
import Link from 'next/link'
import { PiArrowUpRight } from 'react-icons/pi'
import { ContactLinkType } from '../Resume/data/contacts'
import { buttonVariants } from '../ui/button'

export const ContactLink = ({ Icon, link, text, title }: ContactLinkType) => {
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
