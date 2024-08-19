import { Section } from '../Section'
import { SquareIcon } from './SquareIcon'

import { TECHS } from './data'

/**
 * Composant TechStack
 *
 * @returns {JSX.Element} Liste des technologies utilisées
 */

export const TechStack = (): JSX.Element => {
  return (
    <Section className='py-20'>
      <div>
        <h2 className='flex flex-col text-center text-4xl lg:text-6xl'>
          <span>
            Mes <strong>technologies</strong>
          </span>
          <span>du moment</span>
        </h2>
      </div>
      <div className='relative flex flex-wrap justify-center gap-3 py-20 *:size-[10rem] *:rounded-sm *:transition-all *:duration-200 hover:*:-mt-3'>
        {TECHS.map((tech, index) => (
          <div
            key={index}
            className='*: group *:rounded-sm *:transition-all *:duration-200 hover:*:-mt-3'
          >
            <SquareIcon bgColor={tech.bgColor} className='size-[10rem]'>
              <tech.Icon
                className={`rounded-md ${tech.textColor}`}
                role='img'
                aria-label={tech.name}
              />
            </SquareIcon>
            <p className='mt-3 flex h-0 justify-center text-lg text-muted-foreground/70 opacity-0 group-hover:opacity-100'>
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
