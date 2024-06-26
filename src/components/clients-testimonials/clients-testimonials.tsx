import { DescriptionP } from '../generics/description-p'
import { Title } from '../generics/title'
import { ClientsCarousel } from './clients-carousel'

export function ClientsTestimonials() {
  return (
    <div className="w-full flex flex-col text-center items-center justify-center gap-10">
      <Title>clients testimonials</Title>
      <DescriptionP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
        provident sequi sit dicta laudantium officia odio amet quasi ab sed,
        tenetur exercitationem tempora ullam, repellat optio blanditiis
        doloremque nulla?
      </DescriptionP>
      <div className="w-4/5">
        <ClientsCarousel />
      </div>
    </div>
  )
}
