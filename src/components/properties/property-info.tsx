interface PropertyInfoProps {
  title: string
  info: string
}

export function PropertyInfo({ title, info }: PropertyInfoProps) {
  return (
    <p className="w-full font-light text-sm lg:text-base flex justify-between items-center">
      <span>{title}</span>
      <span>{info}</span>
    </p>
  )
}
