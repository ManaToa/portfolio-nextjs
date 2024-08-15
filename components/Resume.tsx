import { Award, Code, GraduationCap, Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { Contact } from './Contact'
import { Projects } from './Projects'
import { Section } from './Section'
import { Training } from './Trainings'
import { Card } from './ui/card'

const PROJECTS = [
  /*{
    Icon: Award,
    title: `Responsive Web Design Certification`,
    description: `FreeCodeCamp`,
    link: 'https://www.freecodecamp.org/certification/Manatoa/responsive-web-design',
  },*/
  {
    Icon: Code,
    title: `Développement site web`,
    description: `Next JS, TypeScript, Tailwind CSS`,
    badge: 'Mission',
  },
  {
    Icon: Award,
    title: `JavaScript Algorithms Certification`,
    description: `FreeCodeCamp`,
    link: 'https://www.freecodecamp.org/certification/Manatoa/javascript-algorithms-and-data-structures',
  },
  {
    Icon: Award,
    title: `Frontend Development Libraries Certification`,
    description: `FreeCodeCamp`,
    link: `https://www.freecodecamp.org/certification/Manatoa/front-end-development-libraries`,
  },
  {
    Icon: Code,
    title: `Développement site web`,
    description: `React JS, Tailwind CSS`,
    badge: 'Mission',
  },
  {
    Icon: Code,
    title: `Développement site web`,
    description: `HTML, CSS`,
    badge: 'Mission',
  },
  /*{
    Icon: Award,
    title: `Backend Development and APIs Certification`,
    description: `FreeCodeCamp`,
    link: `https://www.freecodecamp.org/certification/Manatoa/back-end-development-and-apis`,
  },*/
  /*{
    Icon: Award,
    title: `Quality Assurance Certification`,
    description: `FreeCodeCamp`,
    link: `https://www.freecodecamp.org/certification/Manatoa/quality-assurance-v7`,
  },*/
]

const TRAININGS = [
  {
    Icon: GraduationCap,
    title: `Certifications Développement web`,
    location: `FreeCodeCamp`,
    date: `2022 - 2023`,
  },
  {
    Icon: GraduationCap,
    title: `Master Systèmes et Services Numériques`,
    location: `Université de Genève`,
    date: `2020 - 2022`,
  },
  {
    Icon: GraduationCap,
    title: `Bachelor Systèmes d'Information`,
    location: `Université de Genève`,
    date: `2017 - 2020`,
  },
]

const CONTACT_DATA = [
  {
    Icon: Mail,
    link: 'mailto:kenania@manatoa.dev',
    text: 'kenania@manatoa.dev',
  },
  {
    Icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/kenaniadauphin/',
    text: 'Kenania Dauphin',
  },
]

export const Resume = () => {
  return (
    <Section className='flex items-center gap-4 *:h-full max-md:flex-col md:items-start lg:h-[26rem]'>
      <Card className='flex h-full flex-1 flex-col gap-2 p-4 text-left'>
        <p>Mes projets récents</p>
        {PROJECTS.map((project, i) => (
          <Projects key={i} {...project} />
        ))}
      </Card>
      <div className='flex h-full flex-1 flex-col gap-4 text-left'>
        <Card className='flex-1 p-4'>
          <p>Mes formations</p>
          {TRAININGS.map((training, i) => (
            <Training key={i} {...training} />
          ))}
        </Card>
        <Card className='flex-1 p-4'>
          <p>Me contacter</p>
          {CONTACT_DATA.map((contact, i) => (
            <Contact key={i} {...contact} />
          ))}
        </Card>
      </div>
    </Section>
  )
}
