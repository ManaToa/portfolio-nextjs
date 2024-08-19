import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export type SquareIconProps = {
  className?: string
  bgColor?: string
  size?: string
}

/**
 * Composant SquareIcon
 * @param {string} props.className Classes à passer à l'icône
 * @param {string} props.bgColor Couleur de fond
 * @param {string} props.size Taille de l'icône
 * @returns {JSX.Element} Un icône d'une technologie avec sa couleur de fond
 */

export const SquareIcon = ({
  bgColor = 'bg-transparent',
  size = 'size-20',
  ...props
}: PropsWithChildren<SquareIconProps>): JSX.Element => {
  return (
    <div
      className={cn('flex items-center justify-center bg-muted/50 p-0 shadow-xl', props.className)}
    >
      <div className={cn('absolute z-0 rounded-3xl', bgColor, size)}></div>
      <div className={cn('relative z-10 *:size-full', size)}>{props.children}</div>
    </div>
  )
}
