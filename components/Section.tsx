import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section
      className={cn(
        'm-auto max-w-5xl px-4',
        props.className,
        'text-center sm:px-[4.5rem] md:px-4 md:text-left',
      )}
    >
      {props.children}
    </section>
  )
}
