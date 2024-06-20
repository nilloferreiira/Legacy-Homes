interface DescriptionPProps {
  children: string
}

export function DescriptionP({ children }: DescriptionPProps) {
  return (
    <p className="font-light text-left lg:text-center w-full md:w-2/3">
      {children}
    </p>
  )
}
