import { Title } from '../generics/title'

export function ServicesTitle() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 opacity-0"
      id="services-title"
    >
      <Title>Services</Title>
      <p className="font-light text-left lg:text-center w-full md:w-2/3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae natus
        quo nesciunt optio illo blanditiis ad cupiditate pariatur, dolore culpa
        sapiente magni itaque, doloremque magnam suscipit, totam saepe ut
        officiis.
      </p>
    </div>
  )
}
