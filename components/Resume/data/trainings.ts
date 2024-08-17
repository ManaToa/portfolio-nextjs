import { GraduationCap, LucideIcon } from 'lucide-react'

export type TrainingType = {
  Icon: LucideIcon
  title: string
  location: string
  date: string
}

export const TRAININGS: TrainingType[] = [
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
