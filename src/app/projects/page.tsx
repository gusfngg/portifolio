import { Project } from '@/components/project-block'
import { TitleSection } from '@/components/title-section'

export default function Projects() {
  return (
    <div className="flex flex-col gap-3">
      <TitleSection title="Projetos" />
      <Project name="almeida-terraplenagem" date="30-10-2024" />
      <Project name="pizza-shop" date="09-08-2024" />
      <Project name="ignite-timer" date="15-06-2024" />
    </div>
  )
}
