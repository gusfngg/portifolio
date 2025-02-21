import { About } from '@/components/about'
import { CommandShow } from '@/components/command-show'
import { TitleSection } from '@/components/title-section'
import { Button } from '@/components/ui/button'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-[85px]">
      <div>
        <About />
      </div>

      <div>
        <TitleSection title="Contatos" />

        <div className="flex items-center gap-3 flex-wrap">
          <Button variant={'outline'} className="flex items-end gap-2" asChild>
            <Link
              href={'https://www.linkedin.com/in/gustavo-camargo-4b825b189/'}
              target="_blank"
              className="flex items-center"
            >
              <Linkedin className="text-neutral-600 dark:text-neutral-400 size-6" />
              <span className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-none">
                Linkedin
              </span>
            </Link>
          </Button>

          <Button variant={'outline'} className="flex items-end gap-2" asChild>
            <Link
              href={'https://www.github.com/gusfngg'}
              target="_blank"
              className="flex items-center"
            >
              <Github className="text-neutral-600 dark:text-neutral-400 size-6" />
              <span className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-none">
                Github
              </span>
            </Link>
          </Button>

          <Button variant={'outline'} className="flex items-end gap-2" asChild>
            <Link
              href={'https://www.instagram.com/gs.gus'}
              target="_blank"
              className="flex items-center"
            >
              <Instagram className=" text-neutral-600 dark:text-neutral-400 size-5" />
              <span className="text-neutral-600 dark:text-neutral-400 text-lg leading-none">
                Instagram
              </span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 shadow-xl">
        <CommandShow />
      </div>
    </div>
  )
}
