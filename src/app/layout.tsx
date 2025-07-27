import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from './registry'
import Navigation from '@/components/Navigation'
import { Instrument_Serif, Raleway } from 'next/font/google'

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
})

const raleway = Raleway({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
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
    <html lang="de" className={`${instrumentSerif.variable} ${raleway.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Navigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
