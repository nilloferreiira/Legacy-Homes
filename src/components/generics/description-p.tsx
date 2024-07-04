interface DescriptionPProps {
  children: string
  variant?: 'left'
  color?: 'white'
}

export function DescriptionP(props: DescriptionPProps) {
  return (
    <p
      className={`font-light  ${props.variant === 'left' ? 'text-left' : 'text-left lg:text-center'} w-full md:w-2/3 ${props.color === 'white' ? 'text-white/80' : 'text-[#5C5C5C]'}`}
    >
      {props.children}
    </p>
  )
}
