import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const OpenSans = Open_Sans({ subsets: ['latin'], variable: '--font-caption' })

export const metadata: Metadata = {
  title: 'Kenania Dauphin • Développeur Frontend',
  description: 'Description à créer',
}

/*
FAVICONS 

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0c0a09">
<meta name="msapplication-TileColor" content="#0c0a09">
<meta name="theme-color" content="#0c0a09">

*/

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
