import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devstore',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body className="bg-zinc-950 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-800 scrollbar-track-slate-300 h-32 overflow-y-scroll">
        {children}
      </body>
    </html>
  )
}
