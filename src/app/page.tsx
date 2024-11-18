import { About } from '@/components/about'
import { CommandShow } from '@/components/command-show'
import { Profile } from '@/components/profile'
import { Project } from '@/components/project'
import { TitleSection } from '@/components/title-section'
import { Button } from '@/components/ui/button'
import { Github, Instagram, Linkedin } from 'lucide-react'
import BlurFade from '@/components/ui/blur-fade'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-[85px]">
      <BlurFade inView>
        <Profile />
      </BlurFade>

      <div className="flex flex-col gap-3">
        <BlurFade inView>
          <TitleSection title="Projects" />
        </BlurFade>

        <BlurFade inView>
          <Project name="pizza-shop" description="project made by gus" />
        </BlurFade>
        <BlurFade inView>
          <Project name="ignite-timer" description="project made by gus" />
        </BlurFade>
      </div>

      <div>
        <BlurFade inView>
          <TitleSection title="About" />
        </BlurFade>
        <About />
      </div>

      <div>
        <BlurFade inView>
          <TitleSection title="Connect" />
        </BlurFade>
        <div className="flex items-center gap-3 flex-wrap">
          <BlurFade inView>
            <Button
              variant={'outline'}
              className="flex items-end gap-2"
              asChild
            >
              <Link
                href={'https://www.linkedin.com/in/gustavo-camargo-4b825b189/'}
                target="_blank"
              >
                <Linkedin className="text-neutral-600 dark:text-neutral-400 size-6" />
                <span className="text-neutral-600 dark:text-neutral-400 text-lg leading-none">
                  Linkedin
                </span>
              </Link>
            </Button>
          </BlurFade>

          <BlurFade inView>
            <Button
              variant={'outline'}
              className="flex items-end gap-2"
              asChild
            >
              <Link href={'https://www.github.com/gusfngg'} target="_blank">
                <Github className="text-neutral-600 dark:text-neutral-400 size-6" />
                <span className="text-neutral-600 dark:text-neutral-400 text-lg leading-none">
                  Github
                </span>
              </Link>
            </Button>
          </BlurFade>

          <BlurFade inView>
            <Button
              variant={'outline'}
              className="flex items-end gap-2"
              asChild
            >
              <Link href={'https://www.instagram.com/gs.gus'} target="_blank">
                <Instagram className=" text-neutral-600 dark:text-neutral-400 size-5" />
                <span className="text-neutral-600 dark:text-neutral-400 text-lg leading-none">
                  Instagram
                </span>
              </Link>
            </Button>
          </BlurFade>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 shadow-xl">
        <BlurFade inView>
          <CommandShow />
        </BlurFade>
      </div>
    </div>
  )
}