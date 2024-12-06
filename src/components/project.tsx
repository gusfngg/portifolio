import Link from 'next/link'

interface ProjectProps {
  name: string
}

export function Project({ name }: ProjectProps) {
  return (
    <Link href={`/project/${name}`}>
      <div className="border-[1.5px] hover:bg-zinc-100 dark:hover:bg-neutral-900 p-4 rounded-lg cursor-pointer">
        <h1 className="text-base md:text-lg font-medium">{name}</h1>
      </div>
    </Link>
  )
}
