import type { Metadata } from 'next'
import { Geist, Google_Sans_Code, Young_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const googleSansMono = Google_Sans_Code({
  variable: '--font-mono',
  subsets: ['latin'],
})

const youngSerif = Young_Serif({
  variable: '--font-young-serif',
  subsets: ['latin'],
  weight: '400', // Young Serif only comes in 400 weight
})

export const metadata: Metadata = {
  title: 'Josh Rouwhorst - Senior Software Engineer & Web Developer',
  description: "Josh Rouwhorst's portfolio showcasing projects and skills.",
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
