import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased 
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-neutral-800
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-neutral-800
          dark:[&::-webkit-scrollbar-track]:bg-neutral-900
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800
          selection:bg-emerald-100
          dark:selection:bg-emerald-950
          >`}
      >
        <div className="py-24 mx-auto text-lg max-w-[350px] md:max-w-[700px]">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}