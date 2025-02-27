interface StackInterface {
  stack: string
}

export default function Stack({ stack }: StackInterface) {
  return (
    <div className="py-1 px-2 border-[1.5px] max-w-fit rounded-lg">
      <span className="font-medium text-neutral-300">{stack}</span>
    </div>
  )
}
