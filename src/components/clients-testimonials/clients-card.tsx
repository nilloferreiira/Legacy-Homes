import Image, { StaticImageData } from 'next/image'
import { Quote } from 'lucide-react'

interface ClientsCardProps {
  src: StaticImageData

  index: number
}

export function ClientsCard(props: ClientsCardProps) {
  return (
    <div className="w-full lg:h-[285px] flex flex-col md:flex-row items-start justify-start cursor-pointer bg-white">
      <div className="w-full xl:w-4/6">
        <Image src={props.src} alt={''} priority={true} />
      </div>
      {/* criar funcao para mostrar se for o index ativo  */}
      {true && (
        <div className="w-full p-2 flex flex-col items-start justify-start gap-4">
          <Quote fill="#1D1D1D" className="size-8" />
          <p className="text-justify tracking-widder font-light w-full text-[#5C5C5C] leading-relaxed">
            {`${props.index.toString()}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium sunt inventore quisquam ex ducimus quaerat eos
            blanditiis, nemo pariatur facilis reprehenderit! Ratione non
            consequuntur.`}
          </p>
          <div className="text-left">
            <h1 className="font-black text-xl uppercase">maciej witt</h1>
            <h4 className="text-lightGray font-extralight">Singapore</h4>
          </div>
        </div>
      )}
    </div>
  )
}
