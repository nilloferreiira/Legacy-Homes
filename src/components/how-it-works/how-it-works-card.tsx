import Image from 'next/image'
import { DescriptionP } from '../generics/description-p'
import HouseSearching from '../../assets/House searching-pana.png'
export function HowItWorksCard() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 p-4">
      <Image src={HouseSearching} alt={''} priority={true} />
      <h1 className="text-2xl font-extrabold">looking for a tenant</h1>
      <DescriptionP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos,
        esse excepturi sapiente impedit,s illum velit necessitatibus officia.
      </DescriptionP>
    </div>
  )
}
