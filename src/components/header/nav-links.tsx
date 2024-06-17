const sections = [
  { name: 'Home', sub: 'home' },
  { name: 'Services', sub: 'services' },
  { name: 'Properties', sub: 'properties' },
  { name: 'About Us', sub: 'about-us' },
  { name: 'Contact', sub: 'contact' },
]

export function NavLinks() {
  return (
    <ul
      className="flex flex-col md:flex-row items-center justify-between gap-4 w-full"
      id="navlinks"
    >
      {sections.map((section: { name: string; sub: string }, i: number) => (
        <li className="text-center" key={i} id={section.sub}>
          <a
            href={`#${section.sub}`}
            className="leading-relaxed font-light text-shark text-sm lg:text-base hover:font-semibold transition-all"
          >
            {section.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
