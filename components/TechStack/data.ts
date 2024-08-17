import { IconType } from 'react-icons'
import { SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

export type Tech = {
  name: string
  Icon: IconType
  bgColor?: string
  textColor: string
}

export const TECHS: Tech[] = [
  { name: `JavaScript`, Icon: SiJavascript, bgColor: 'bg-black', textColor: 'text-[#F0DB4F]' },
  { name: `TypeScript`, Icon: SiTypescript, bgColor: 'bg-white', textColor: 'text-[#007ACC]' },
  { name: `React JS`, Icon: SiReact, textColor: 'text-[#61DBFB]' },
  { name: `Next JS`, Icon: SiNextdotjs, textColor: 'text-black' },
  { name: `Tailwind CSS`, Icon: SiTailwindcss, textColor: 'text-[#06B6D4]' },
]
