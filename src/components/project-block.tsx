import Link from 'next/link'

interface ProjectProps {
  name: string
  date?: string
}

export function Project({ name, date }: ProjectProps) {
  return (
    <Link href={`/projects/${name}`}>
      <div className="border-[1.5px] flex items-center justify-between hover:bg-zinc-100 dark:hover:bg-neutral-900 hover:border-transparent p-4 rounded cursor-pointer">
        <h1 className="text-base dark:text-neutral-200 md:text-lg font-medium">
          {name}
        </h1>
        <span className="font-mono text-neutral-700 dark:text-neutral-400 text-sm">
          {date}
        </span>
      </div>
    </Link>
  )
}
