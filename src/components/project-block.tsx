import Link from 'next/link'

interface ProjectProps {
  name: string
  date?: string
}

export function Project({ name, date }: ProjectProps) {
  return (
    <Link href={`/projects/${name}`}>
      <div className="border-[1.5px] hover:bg-zinc-100 dark:hover:bg-neutral-900 p-4 rounded-lg cursor-pointer">
        <h1 className="text-base md:text-lg font-medium">{name}</h1>
        <span className="font-mono text-neutral-700 dark:text-neutral-400 text-sm">
          {date}
        </span>
      </div>
    </Link>
  )
}
