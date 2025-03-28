import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'gsGus',
  description: 'Portifólio profissional de Gustavo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`antialiased 
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-neutral-800
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-neutral-800
          dark:[&::-webkit-scrollbar-track]:bg-neutral-900
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800
          selection:bg-cyan-950
          >`}
      >
        <div className="min-h-full px-6 py-10">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="mx-auto max-w-prose">{children}</main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
