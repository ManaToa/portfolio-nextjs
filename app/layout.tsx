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
