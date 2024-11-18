import Link from 'next/link'
import { Undo2 } from 'lucide-react'

export default function IgniteTimer() {
  return (
    <div>
      <Link
        className="flex items-center gap-2 absolute left-[19rem]"
        href={'/'}
      >
        <Undo2 size={12} />
        <span className="text-sm font-medium">back</span>
      </Link>

      <div>
        <h1 className="text-lg text-primary font-medium leading-none">
          Ignite-timer
        </h1>

        <p className="text-neutral-400 mt-4">.</p>
      </div>
    </div>
  )
}
