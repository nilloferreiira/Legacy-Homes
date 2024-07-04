'use client'

import { DescriptionP } from '../generics/description-p'
import { Title } from '../generics/title'
import { Button } from '../ui/button'
import Image from 'next/image'
import PartnerImage from '../../assets/partner-1.png'
import { partners } from '@/seed/partners-seed'
import { useState } from 'react'

export function Partners() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  function handleNext() {
    if (currentIndex < partners.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }
  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  return (
    <div className="w-full mx-auto flex flex-col text-center items-center justify-center gap-10 lg:flex-row lg:items-start 2xl:justify-between lg:px-24 mb-6 lg:mb-48">
      {/* left   */}
      <div className="w-full lg:w-2/3 flex flex-col items-center text-center justify-center gap-5 lg:items-start lg:text-left lg:pt-12">
        <Title>partners</Title>
        <DescriptionP variant="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          tenetur porro aut earum consectetur saepe perferendis accusamus facere
          optio at. In nesciunt molestias sit quaerat enim, dignissimos incidunt
          nam reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Quo, commodi? Exercitationem nulla corporis aspernatur
          laudantium iusto harum quam inventore esse neque odit cupiditate, sit
          consectetur pariatur perferendis a assumenda! Deleniti.
        </DescriptionP>

        {/* partner info */}
        <div className="text-left">
          <h1 className="font-black text-2xl uppercase">
            {`${partners[currentIndex].firstName} ${partners[currentIndex].lastName}`}
          </h1>
          <h4 className="text-lightGray font-extralight">
            {partners[currentIndex].position}
          </h4>
        </div>

        {/* buttons */}
        <div className="w-full flex items-center justify-center gap-3 lg:items-start lg:justify-start">
          <Button
            onClick={handlePrev}
            variant={'square'}
            className="w-32 h-14 bg-transparent border border-shark text-shark hover:bg-transparent/10"
          >
            previous
          </Button>
          <Button
            onClick={handleNext}
            variant={'square'}
            className="w-32 h-14 bg-shark"
          >
            next
          </Button>
        </div>
      </div>
      {/* right  */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:items-start lg:justify-end">
        <Image src={PartnerImage} alt={'alt'} priority={true} />
      </div>
    </div>
  )
}
