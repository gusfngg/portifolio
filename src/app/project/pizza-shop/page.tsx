import Link from 'next/link'
import { Github } from 'lucide-react'
import Image from 'next/image'
import PizzaShopImage from '@/assets/pizza-shop.png'
import PizzaShopImage2 from '@/assets/pizza-shop2.png'
import { Button } from '@/components/ui/button'

export default function PizzaShop() {
  return (
    <div>
      <div>
        <h1 className="text-base text-primary font-medium leading-none">
          Pizza-shop
        </h1>

        <p className="text-neutral-700 text-sm md:text-base dark:text-neutral-400 mt-4">
          Pizza Shop é uma aplicação web desenvolvida em TypeScript e ReactJS,
          focada no gerenciamento eficiente de pedidos. Utilizando Vite para
          performance e Styled-components. Oferece uma interface otimizada e de
          fácil uso.
        </p>

        <Image
          className="mt-8 rounded-xl border-2"
          src={PizzaShopImage}
          alt=""
        />
        <Image
          className="mt-3 rounded-xl border-2"
          src={PizzaShopImage2}
          alt=""
        />

        <Button
          variant={'outline'}
          className="flex items-center gap-2 mt-6"
          asChild
        >
          <Link href={'https://almeidaterraplenagem.com.br'} target="_blank">
            <Github className="text-neutral-600 dark:text-neutral-400 size-6" />
            <span className="text-neutral-600 dark:text-neutral-400 text-lg leading-none">
              Acesse o github do projeto
            </span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
