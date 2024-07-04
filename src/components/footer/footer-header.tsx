import { DescriptionP } from '../generics/description-p'

export function FooterHeader() {
  return (
    <div className="flex flex-col gap-2 lg:gap-5 items-center justify-center md:items-start w-full lg:w-2/4">
      <h1 className="font-base text-2xl lg:text-5xl tracking-wide">
        Legacy Homes
      </h1>
      <DescriptionP variant="left" color="white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime ex
        iste, ad minima explicabo nesciunt, alias molestiae veritatis cupiditate
        exercitationem voluptate neque architecto non provident tenetur debitis,
        obcaecati rerum.
      </DescriptionP>
      midias
    </div>
  )
}
