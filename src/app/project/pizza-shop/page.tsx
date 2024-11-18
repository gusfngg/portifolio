import Link from 'next/link'
import { Undo2 } from 'lucide-react'

export default function PizzaShop() {
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
          Pizza-shop
        </h1>

        <p className="text-neutral-700 dark:text-neutral-400 mt-4">
          Pizza Shop é uma aplicação web desenvolvida em TypeScript e ReactJS,
          focada no gerenciamento eficiente de pedidos. Utilizando Vite para
          performance e Styled-components. Oferece uma interface otimizada e de
          fácil uso.
        </p>
      </div>
    </div>
  )
}
