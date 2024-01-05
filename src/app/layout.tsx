import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import { ThemeProvider } from "../components/ThemeContex/ThemeContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'fidawebcreations',
  description: 'This is a portfolio website of a web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const Onclick = () => {
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
