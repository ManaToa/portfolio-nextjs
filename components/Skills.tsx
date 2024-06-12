import { SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { Section } from './Section'
import { SquareIcon } from './Square-Icon'

const techs = [
  { name: `JavaScript`, Icon: SiJavascript, bgColor: 'bg-black', textColor: 'text-[#F0DB4F]' },
  { name: `TypeScript`, Icon: SiTypescript, bgColor: 'bg-white', textColor: 'text-[#007ACC]' },
  { name: `React JS`, Icon: SiReact, textColor: 'text-[#61DBFB]' },
  { name: `Next JS`, Icon: SiNextdotjs, textColor: 'text-black' },
  { name: `Tailwind CSS`, Icon: SiTailwindcss, textColor: 'text-[#06B6D4]' },
]

export const Skills = () => {
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
        {techs.map((tech, index) => (
          <div
            key={index}
            className='*: group *:rounded-sm *:transition-all *:duration-200 hover:*:-mt-3'
          >
            <SquareIcon bgColor={tech.bgColor} className='size-[10rem]'>
              <tech.Icon className={`rounded-md ${tech.textColor}`} />
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
