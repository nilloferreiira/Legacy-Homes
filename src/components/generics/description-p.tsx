interface DescriptionPProps {
  children: string
}

export function DescriptionP(props: DescriptionPProps) {
  return (
    <p className="font-light text-left lg:text-center w-full md:w-2/3 text-[#5C5C5C]">
      {props.children}
    </p>
  )
}
