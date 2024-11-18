import Image from 'next/image'
import BlurFade from './ui/blur-fade'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <BlurFade inView>
        <Image
          className="w-16 h-16"
          src="https://github.com/gusfngg.png"
          alt="profile-picture"
          width={460}
          height={460}
        />
      </BlurFade>

      <div>
        <BlurFade inView>
          <h1 className="text-xl font-semibold">Gustavo Camargo</h1>
        </BlurFade>
        <BlurFade inView>
          <span className="text-neutral-600 dark:text-neutral-300 font-mono text-base">
            fullstack engineer
          </span>
        </BlurFade>
      </div>
    </div>
  )
}
