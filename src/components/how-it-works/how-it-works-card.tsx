import Image, { StaticImageData } from 'next/image'
import { DescriptionP } from '../generics/description-p'

interface HowItWorksCardProps {
  title: string
  description: string
  image: StaticImageData
}

export function HowItWorksCard(props: HowItWorksCardProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 p-4">
      <Image src={props.image} alt={''} priority={true} />
      <h1 className="text-2xl font-extrabold">{props.title}</h1>
      <DescriptionP>{props.description}</DescriptionP>
    </div>
  )
}
