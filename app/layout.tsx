import type { Metadata } from 'next'
import Navbar from '@/Components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://israelrosas1.github.io/Website'),
  title: {
    default: 'Israel Rosas - Mobile App Developer',
    template: '%s | Israel Rosas',
  },
  description: 'Professional mobile app developer specializing in React Native and TypeScript. Building high-quality iOS and Android applications for businesses.',
  keywords: ['Mobile App Developer', 'React Native', 'TypeScript', 'iOS Developer', 'Android Developer', 'App Development'],
  authors: [{ name: 'Israel Rosas' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://israelrosas1.github.io/Website',
    title: 'Israel Rosas - Mobile App Developer',
    description: 'Professional mobile app developer specializing in React Native and TypeScript.',
    siteName: 'Israel Rosas Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Israel Rosas - Mobile App Developer',
    description: 'Professional mobile app developer specializing in React Native and TypeScript.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
