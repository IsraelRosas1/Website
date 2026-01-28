import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Israel Rosas - Mobile App Developer',
  description: 'Mobile App Developer · React Native · TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
