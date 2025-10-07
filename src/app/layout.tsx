import type { Metadata } from 'next'
import { Geist, Google_Sans_Code, Young_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  fallback: [
    'ui-sans-serif',
    'system-ui',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
})

const googleSansMono = Google_Sans_Code({
  variable: '--font-mono',
  subsets: ['latin'],
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
})

const youngSerif = Young_Serif({
  variable: '--font-young-serif',
  subsets: ['latin'],
  weight: '400', // Young Serif only comes in 400 weight
  fallback: [
    'ui-serif',
    'Georgia',
    'Cambria',
    'Times New Roman',
    'Times',
    'serif',
  ],
})

export const metadata: Metadata = {
  title: 'Josh Rouwhorst - Senior Software Engineer & Web Developer',
  description: "Josh Rouwhorst's portfolio showcasing projects and skills.",
  themeColor: '#00a6f4',
  creator: 'Josh Rouwhorst',
  openGraph: {
    title: 'Josh Rouwhorst - Senior Software Engineer & Web Developer',
    description: "Josh Rouwhorst's portfolio showcasing projects and skills.",
    url: 'https://joshr.work',
    siteName: 'Josh Rouwhorst Portfolio',
    images: [
      {
        url: 'https://joshr.work/social-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Josh Rouwhorst Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${googleSansMono.variable} ${youngSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
