interface Link {
  name: string
  href: string | null
}

interface FooterSectionProps {
  children: string
  links: Link[]
}

export function FooterSection(props: FooterSectionProps) {
  return (
    <div className="flex flex-col w-1/4 items-center justify-center md:items-start md:justify-start gap-10">
      <h1 className="font-bold md:text-lg text-xl">{props.children}</h1>
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start text-left gap-5">
        {props.links.map((link: Link, i: number) => (
          <a
            key={i}
            href={link.href!}
            className="text-white/80 hover:text-white/90"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )
}
