import Image from 'next/image'

type StatusPageProps = {
  mode: 'construction' | 'maintenance'
}

/**
 * Composant réutilisable pour afficher une page de statut
 * (construction ou maintenance)
 */
export default function StatusPage({ mode }: StatusPageProps) {
  const isMaintenance = mode === 'maintenance'

  const title = isMaintenance ? 'Ce site est en maintenance' : 'Site en construction'

  const description = isMaintenance
    ? 'Nous effectuons actuellement des travaux de maintenance. Le site sera de retour très bientôt. Merci de votre patience!'
    : 'Nous travaillons actuellement sur notre site. Revenez bientôt pour découvrir notre nouvelle version!'

  const altText = isMaintenance ? 'Site en maintenance' : 'Site en construction'

  return (
    <div className='flex min-h-screen items-center justify-center bg-blue-100 font-sans'>
      <main className='mx-4 w-full max-w-5xl rounded-2xl bg-white p-8 shadow-lg md:p-12'>
        <div className='flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12'>
          {/* Texte à gauche */}
          <div className='flex-1 text-left'>
            <h1 className='mb-4 text-4xl font-bold uppercase leading-tight text-blue-900 md:text-5xl'>
              {title}
            </h1>
            <p className='text-lg leading-relaxed text-gray-700 md:text-xl'>{description}</p>
          </div>

          {/* Image à droite */}
          <div className='flex-1'>
            <Image
              src='/img/construction-site.jpeg'
              alt={altText}
              width={2048}
              height={2048}
              quality={100}
              className='h-auto w-full rounded-lg'
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}
