import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { ClientsCard } from './clients-card'
import ClientImage1 from '../../assets/clients-carousel-1.png'

export function ClientsCarousel() {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
        containScroll: false,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-full lg:basis-4/5 xl:basis-[60%]"
          >
            <ClientsCard index={index} src={ClientImage1} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
