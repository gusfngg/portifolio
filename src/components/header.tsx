'use client'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const path = usePathname()
  const isHome = path === '/'

  return (
    <header className="mx-auto max-w-prose my-10">
      <nav className="flex items-center flex-col text-sm md:text-base justify-between sm:flex-row max-sm:gap-6">
        <Link
          href={'/'}
          className="relative flex no-underline items-center sm:flex-row max-sm:gap-6"
        >
          <div
            data-is-home={isHome}
            className="w-12 h-full flex items-center absolute -left-12 px-2 size-5 data-[is-home=true]:hidden"
          >
            <ChevronLeft />
          </div>

          <div className="flex w-full flex-col cursor-normal ">
            <span className="text-lg font-semibold">Gustavo Camargo</span>
            <div>
              <span className="text-neutral-600 dark:text-neutral-300 font-mono text-sm">
                desenvolvedor de software
              </span>
            </div>
          </div>
        </Link>

        <div className="items-center flex gap-6">
          <Link className="relative" href="/projects">
            /projetos
            <div
              data-is-current-path={path === '/projects'}
              className="hidden data-[is-current-path=true]:block size-[5px] bg-emerald-600 absolute rounded-full left-1/2"
            />
          </Link>
        </div>
      </nav>

      <div className="border mt-6 rounded-b-2xl"></div>
    </header>
  )
}
