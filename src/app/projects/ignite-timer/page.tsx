import Image from 'next/image'
import IgniteTimerImg from '@/assets/ignite-timer.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function IgniteTimer() {
  return (
    <div>
      <div>
        <h1 className="text-base text-primary font-medium leading-none">
          Ignite Timer
        </h1>

        <p className="text-neutral-600 text-sm md:text-base dark:text-neutral-400 mt-4">
          O Ignite Timer é um projeto web que auxilia na concentração,
          desenvolvido com TypeScript, ReactJS, Styled-components, Vite, e
          gerenciado via Git e Github. Ele permite definir um tempo para focar,
          pausar o temporizador e consultar ciclos anteriores. Foram utilizadas
          as bibliotecas immer, zod, react-router-dom, date-fns e
          react-hook-form para otimizar o desenvolvimento. É uma ferramenta
          prática para gerenciar produtividade.
        </p>

        <Image
          className="mt-8 rounded-xl border-2"
          src={IgniteTimerImg}
          alt=""
        />

        <Button
          variant={'outline'}
          className="flex items-center gap-2 mt-6"
          asChild
        >
          <Link
            href={'https://github.com/gusfngg/ignite-timer'}
            target="_blank"
          >
            <span className="text-neutral-600 dark:text-neutral-400 text-lg leading-none">
              Acesse o projeto
            </span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
