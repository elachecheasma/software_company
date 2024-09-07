import './globals.css'
import Navbar from './Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OSlicod',
  description: '',
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