import { Project } from '@/components/project-block'
import { TitleSection } from '@/components/title-section'

export default function Projects() {
  return (
    <div className="flex flex-col gap-3">
      <TitleSection title="Projetos" />
      <Project name="almeida-terraplenagem" date="08-02-2008" />
      <Project name="pizza-shop" />
      <Project name="ignite-timer" />
    </div>
  )
}
