import { FooterLinks, Link } from './footer-links'

interface FooterSectionProps {
  children: string
  links: Link[]
}

export function FooterSection(props: FooterSectionProps) {
  return (
    <div className="flex flex-col w-full lg:w-1/4 items-center justify-center md:items-start md:justify-start gap-5 md:gap-10 text-center md:text-left">
      <h1 className="font-bold md:text-lg text-xl">{props.children}</h1>
      <FooterLinks links={props.links} />
    </div>
  )
}
