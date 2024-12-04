import { ButtonBack } from '@/components/button-back'
import Image from 'next/image'
import AlmeidaImage from '@/assets/almeidaterraplenagem.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ExternalLinkIcon } from 'lucide-react'

export default function AlmeidaTerraplenagem() {
  return (
    <div>
      <ButtonBack />

      <div>
        <h1 className="text-base text-primary font-semibold leading-none">
          Almeida terraplenagem
        </h1>

        <p className="text-neutral-700 text-sm md:text-base dark:text-neutral-400 mt-4">
          A Almeida Terraplenagem é uma empresa especializada em serviços de
          terraplenagem, que atua com qualidade e precisão no preparo de
          terrenos para construções, pavimentações e projetos de infraestrutura.
          Oferece uma variedade de serviços, como escavação, remoção de
          entulhos, compactação e nivelamento de solo, buscando sempre a
          segurança e a eficácia em todas as etapas do processo.
        </p>

        <p className="text-neutral-700 text-sm md:text-base dark:text-neutral-400 mt-4">
          Aplicação feita com as tecnologias mais recentes do mercado. As
          principais são: - Next.js, TypeScript, Shadcn ui...
        </p>

        <Image className="mt-8 rounded-xl border-2" src={AlmeidaImage} alt="" />

        <Button
          variant={'outline'}
          className="flex items-center gap-2 mt-6"
          asChild
        >
          <Link href={'https://github.com/gusfngg/pizza-shop'} target="_blank">
            <ExternalLinkIcon className="text-neutral-600 dark:text-neutral-400 size-6" />
            <span className="text-neutral-600 dark:text-neutral-400 text-lg leading-none">
              Acesse o site
            </span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
