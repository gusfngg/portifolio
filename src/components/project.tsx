import Link from 'next/link'

interface ProjectProps {
  name: string
  description: string
}

export function Project({ name, description }: ProjectProps) {
  return (
    <Link href={`/project/${name}`}>
      <div className="border-[1.5px] hover:bg-zinc-100 dark:hover:bg-neutral-900 p-3 rounded-lg cursor-pointer">
        <h1 className="text-lg font-medium">{name}</h1>
        <span className="text-base text-neutral-500 dark:text-neutral-400">
          {description}
        </span>
      </div>
    </Link>
  )
}
