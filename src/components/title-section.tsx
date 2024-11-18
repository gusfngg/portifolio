interface TitleProps {
  title: string
}

export function TitleSection({ title }: TitleProps) {
  return <h2 className="font-semibold text-lg mb-2">{title}</h2>
}
