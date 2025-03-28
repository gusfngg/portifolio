import { About } from '@/components/about'
import { TitleSection } from '@/components/title-section'
import { ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-[60px]">
      <div>
        <About />
      </div>

      <div>
        <TitleSection title="Contatos" />

        <div className="flex flex-col gap-3">
          <div className="border-[1.5px] hover:bg-zinc-100 dark:hover:bg-neutral-900 hover:border-transparent px-4 py-3 rounded cursor-pointer">
            <Link
              href={'https://www.linkedin.com/in/gustavo-camargo-4b825b189/'}
              target="_blank"
              className="flex justify-between"
            >
              <div className="flex items-end gap-3">
                <Linkedin className="text-neutral-600 dark:text-neutral-400 size-5" />
                <span className="text-neutral-600 text-lg dark:text-neutral-400 leading-none">
                  Linkedin
                </span>
              </div>

              <ArrowUpRight className="text-neutral-400" />
            </Link>
          </div>
          <div className="border-[1.5px] hover:bg-zinc-100 dark:hover:bg-neutral-900 hover:border-transparent px-4 py-3 rounded cursor-pointer">
            <Link
              href={'https://www.github.com/gusfngg'}
              target="_blank"
              className="flex justify-between"
            >
              <div className="flex items-end gap-3">
                <Github className="text-neutral-600 dark:text-neutral-400 size-5" />
                <span className="text-neutral-600 text-lg dark:text-neutral-400 leading-none">
                  Github
                </span>
              </div>

              <ArrowUpRight className="text-neutral-400" />
            </Link>
          </div>
          <div className="border-[1.5px] hover:bg-zinc-100 dark:hover:bg-neutral-900 hover:border-transparent px-4 py-3 rounded cursor-pointer">
            <Link
              href={'https://www.instagram.com/gs.gus'}
              target="_blank"
              className="flex justify-between"
            >
              <div className="flex items-end gap-3">
                <Instagram className="text-neutral-600 dark:text-neutral-400 size-5" />
                <span className="text-neutral-600 text-lg dark:text-neutral-400 leading-none">
                  Instagram
                </span>
              </div>

              <ArrowUpRight className="text-neutral-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
