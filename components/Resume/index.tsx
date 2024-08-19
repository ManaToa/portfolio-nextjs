import { ContactLink } from '../ContactLink'
import { ProjectItem } from '../ProjectItem'
import { Section } from '../Section'
import { TrainingItem } from '../TrainingItem'
import { Card } from '../ui/card'

import { CONTACT_DATA } from './data/contacts'
import { PROJECTS } from './data/projects'
import { TRAININGS } from './data/trainings'

/**
 * Composant Resume
 * @returns {JSX.Element} Liste dees projets, formations et liens de contact
 */

export const Resume = (): JSX.Element => {
  return (
    <Section className='flex items-center gap-4 *:h-full max-md:flex-col md:items-start lg:h-[26rem]'>
      <Card className='flex h-full flex-1 flex-col gap-2 p-4 text-left'>
        <p>Mes projets récents</p>
        {PROJECTS.map((project, i) => (
          <ProjectItem key={i} {...project} />
        ))}
      </Card>
      <div className='flex h-full flex-1 flex-col gap-4 text-left'>
        <Card className='flex-1 p-4'>
          <p>Mes formations</p>
          {TRAININGS.map((training, i) => (
            <TrainingItem key={i} {...training} />
          ))}
        </Card>
        <Card className='flex-1 p-4'>
          <p>Me contacter</p>
          {CONTACT_DATA.map((contact, i) => (
            <ContactLink key={i} {...contact} />
          ))}
        </Card>
      </div>
    </Section>
  )
}
