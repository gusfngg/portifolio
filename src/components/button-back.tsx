import { Undo2 } from 'lucide-react'
import Link from 'next/link'

export function ButtonBack() {
  return (
    <Link className="flex items-center gap-2 absolute left-[19rem]" href={'/'}>
      <Undo2 size={12} />
      <span className="text-sm font-medium">back</span>
    </Link>
  )
}
