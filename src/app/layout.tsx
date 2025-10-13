import '@/styles/globals.css'

import { Geist, Geist_Mono } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { Providers } from '@/components/providers'
import type { Metadata } from 'next'

const geist = Geist({
  variable: '--font-inter',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-inter-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Resify',
    template: '%s | Resify',
  },
  description: 'Resify é um sistema de gerenciamento de reservas.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
