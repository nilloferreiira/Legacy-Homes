interface TitleProps {
  children: string
}

export function Title({ children }: TitleProps) {
  return (
    <h1 className="uppercase font-extrabold text-4xl lg:text-6xl">
      {children}
    </h1>
  )
}
