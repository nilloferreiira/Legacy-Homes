const sections = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Properties', id: 'properties' },
  { name: 'About Us', id: 'about-us' },
  { name: 'Contact', id: 'contact' },
]

export function NavLinks() {
  return (
    <ul
      className="flex flex-col md:flex-row items-center justify-between gap-4 w-full"
      id="navlinks"
    >
      {sections.map((section: { name: string; id: string }, i: number) => (
        <li className="text-center" key={i} id={section.id}>
          <a
            href={`#${section.id}`}
            className="leading-relaxed font-light text-sm lg:text-base hover:font-semibold transition-all"
          >
            {section.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
