import { Project } from '@/components/project'
import { TitleSection } from '@/components/title-section'
import BlurFade from '@/components/ui/blur-fade'

export default function Projects() {
  return (
    <div className="flex flex-col gap-3">
      <BlurFade inView>
        <TitleSection title="Projetos" />
      </BlurFade>
      <BlurFade inView>
        <Project name="almeida-terraplenagem" />
      </BlurFade>

      <BlurFade inView>
        <Project name="pizza-shop" />
      </BlurFade>
      <BlurFade inView>
        <Project name="ignite-timer" />
      </BlurFade>
    </div>
  )
}
