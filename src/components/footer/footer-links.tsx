export interface Link {
  name: string
  href: string | null
}

interface FooterLinksProps {
  links: Link[]
}

export function FooterLinks(props: FooterLinksProps) {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left gap-5">
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
  )
}
