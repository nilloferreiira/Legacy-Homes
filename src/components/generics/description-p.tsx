interface DescriptionPProps {
  children: string
  variant?: 'left'
}

export function DescriptionP(props: DescriptionPProps) {
  return (
    <p
      className={`${props.variant === 'left' ? 'font-light text-left w-full md:w-2/3 text-[#5C5C5C]' : 'font-light text-left lg:text-center w-full md:w-2/3 text-[#5C5C5C]'}`}
    >
      {props.children}
    </p>
  )
}
