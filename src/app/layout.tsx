import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from './registry'
import Navigation from '@/components/Navigation'
import { Instrument_Serif, Raleway } from 'next/font/google'

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const raleway = Raleway({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: 'Ida Patzelt',
  description: 'Ich baue Unternehmen mit Haltung.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${raleway.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={instrumentSerif.className}>
        <StyledComponentsRegistry>
          <Navigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
