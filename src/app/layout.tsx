import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from './registry'
import Navigation from '@/components/Navigation'

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
    <html lang="de">
      <body>
        <StyledComponentsRegistry>
          <Navigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
