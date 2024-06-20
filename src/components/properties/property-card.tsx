import Image, { StaticImageData } from 'next/image'
import { MapPin } from 'lucide-react'
import { PropertyCardInfo } from '@/components/properties/property-card-info'
import { Button } from '@/components/ui/button'
import { ComponentProps } from 'react'

interface PropertyCardProps extends ComponentProps<'div'> {
  image: StaticImageData
  title: string
  location: string
  price: string
  propertyInfo: {
    area: string
    bedrooms: string
    bathrooms: string
  }
}

export function PropertyCard(props: PropertyCardProps) {
  return (
    <div
      id={props.id}
      className="w-[358px] flex flex-col gap-3 items-start justify-center text-gray-900 border border-shark"
    >
      <div className="w-full h-64 relative">
        <Image
          src={props.image}
          alt={'Foto da propriedade'}
          priority={true}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-none"
        />
      </div>
      {/* property description  */}
      <div className="w-full mx-auto flex flex-col items-start justify-start gap-4 px-6 pb-4">
        <h1 className="font-medium text-base lg:text-lg">{props.title}</h1>
        <p className="flex items-start justify-start gap-2">
          <MapPin />
          <span className="font-medium text-sm lg:text-base">
            {props.location}
          </span>
        </p>
        <p className="font-bold text-sm lg:text-base">{props.price}</p>
        <div className="w-full text-gray-800 space-y-4">
          <PropertyCardInfo
            title={'Area (sqft)'}
            info={props.propertyInfo.area}
          />
          <PropertyCardInfo
            title={'Bedrooms'}
            info={props.propertyInfo.bedrooms}
          />
          <PropertyCardInfo
            title={'Bathrooms'}
            info={props.propertyInfo.bathrooms}
          />
        </div>
        <Button size={'lg'} variant={'square'} className="w-full py-7">
          View Details
        </Button>
      </div>
    </div>
  )
}
