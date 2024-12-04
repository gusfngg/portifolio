import BlurFade from '@/components/ui/blur-fade'

export function About() {
  return (
    <div className="flex flex-col gap-4">
      <BlurFade inView>
        <p className="text-neutral-800 dark:text-neutral-300 text-sm  md:text-base text-justify lg:text-left">
          Meu nome é Gustavo Camargo, sou Desenvolvedor Full Stack e moro no
          estado de São Paulo. Atualmente estou concluindo com previsão de
          término de faculdade em 2028.
        </p>
      </BlurFade>

      <BlurFade inView>
        <p className="text-neutral-800 dark:text-neutral-300  text-sm md:text-base  text-justify lg:text-left">
          Com mais de dois anos de estudo na área de desenvolvimento web e
          back-end, adquiri uma experiência significativa na criação de soluções
          digitais. Meu foco principal é a criação de interfaces inovadoras e a
          capacidade de transformar códigos em experiências realmente
          excepcionais.
        </p>
      </BlurFade>

      <BlurFade inView>
        <p className="text-neutral-800 dark:text-neutral-300 text-sm md:text-base text-justify lg:text-left">
          Tenho um compromisso constante com o aprendizado contínuo, sempre em
          busca de novos conhecimentos, com a missão de aprimorar minhas
          habilidades e levar a programação a um nível que transcenda o simples
          código, proporcionando experiências incríveis aos usuários.
        </p>
      </BlurFade>
    </div>
  )
}
