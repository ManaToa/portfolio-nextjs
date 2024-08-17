import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export type SquareIconProps = {
  className?: string
  bgColor?: string
  size?: string
}

export const SquareIcon = ({
  bgColor = 'bg-transparent',
  size = 'size-20',
  ...props
}: PropsWithChildren<SquareIconProps>) => {
  return (
    <div
      className={cn('flex items-center justify-center bg-muted/50 p-0 shadow-xl', props.className)}
    >
      <div className={cn('absolute z-0 rounded-3xl', bgColor, size)}></div>
      <div className={cn('relative z-10 *:size-full', size)}>{props.children}</div>
    </div>
  )
}
