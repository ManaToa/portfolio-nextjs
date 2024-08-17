import Image from 'next/image'
import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { Section } from '../Section'

export const Hero = () => {
  return (
    <Section className='flex items-start gap-6 py-20 max-md:flex-col'>
      <div className='flex-[1.5]'>
        <div className='text-4xl lg:text-6xl'>
          <p className='font-bold'>Bonjour ! 👋</p>
          <h2>
            <span className='font-bold'>Kenania</span> Dauphin
          </h2>
          <h3>
            Développeur <span className='font-bold'>Web Frontend</span>
          </h3>
        </div>
        <p className='pt-6 text-justify font-caption text-xl italic md:text-left'>
          {`Passionné de développement web, diplômé en Systèmes d'Information de l'Université de Genève,
          je suis toujours à la recherche de nouvelles technologies à explorer. En ce moment c'est Next JS.`}
        </p>
        <p className='pb-6 pt-2 text-justify font-caption text-xl italic md:text-left'>{`Pour moi, chaque ligne de code est une opportunité de créer quelque chose d'unique et d'impactant.`}</p>
        <div className='flex justify-center gap-1 py-3 md:justify-normal'>
          <Link
            href='https://github.com/ManaToa'
            target='_blank'
            title='Consulter mon profil GitHub'
          >
            <IoLogoGithub size={40} role='img' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/kenaniadauphin/'
            target='_blank'
            title='Consulter mon profil LinkedIn'
          >
            <IoLogoLinkedin size={40} role='img' />
          </Link>
        </div>
      </div>
      <div className='mx-auto flex-1 md:mx-0'>
        <Image
          src={'/img/my-face.jpg'}
          alt='Photo de Kenania Dauphin'
          width={500}
          height={500}
          className='h-auto w-full rounded-full'
        />
      </div>
    </Section>
  )
}
