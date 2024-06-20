import { ComponentProps } from 'react'

interface TitleProps extends ComponentProps<'h1'> {
  children: string
}

export function Title(props: TitleProps) {
  return (
    <h1 className="uppercase font-extrabold text-4xl lg:text-6xl" id={props.id}>
      {props.children}
    </h1>
  )
}
