import { cn } from '@/lib/utils'
import { FC, PropsWithChildren } from 'react'

interface SectionProps {
  className?: string
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      className={cn(
        'm-auto max-w-5xl px-4',
        className,
        'text-center sm:px-[4.5rem] md:px-4 md:text-left',
      )}
    >
      {children}
    </section>
  )
}
