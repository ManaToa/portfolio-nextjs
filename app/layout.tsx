import { ThemeProvider } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const OpenSans = Open_Sans({ subsets: ['latin'], variable: '--font-caption' })

export const metadata: Metadata = {
  title: 'Kenania Dauphin • Développeur Web Frontend',
  description:
    'Portfolio de Kenania Dauphin, développeur web frontend. Découvrez mon CV, mon parcours et mes différents projets.',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/icon.png',
    apple: '/icons/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/icon.png',
    },
  },
  manifest: '/site.webmanifest',
  creator: 'Kenania Dauphin',
  authors: [{ name: 'Kenania' }],
  metadataBase: new URL('https://manatoa.dev'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'développeur web',
    'développeur frontend',
    'portfolio développeur',
    'développeur informatique',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'NextJS',
    'TailwindCSS',
    'NodeJS',
    'SQL',
    'projets web',
    'expérience professionnelle',
    'curriculum vitae',
    'compétences techniques',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr' className='h-full'>
      <body
        className={cn(
          GeistSans.variable,
          OpenSans.variable,
          'h-full bg-background font-sans text-foreground',
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
