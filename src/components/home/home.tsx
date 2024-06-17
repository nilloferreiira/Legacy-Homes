'use client'

import { useEffect } from 'react'
import skyScrapperPic from '../../assets/skyscrapper.png'
import Image from 'next/image'
import { homeAnimation } from '@/animations/home/home-animation'

export function HomeContainer() {
  useEffect(() => {
    homeAnimation()
  }, [])

  return (
    <div
      id="home"
      className="w-full flex flex-col-reverse md:flex-row items-center justify-center mx-auto transition-all"
    >
      <div className="w-full md:w-3/4 py-8 md:py-0 opacity-0" id="title">
        <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl">
          Easiest way to find your{' '}
          <span className="uppercase block text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-black">
            dream place
          </span>
        </h1>
        <p className="font-light 2xl:w-4/5">
          {` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s....`}
        </p>
      </div>
      <div
        className="w-full opacity-0 2xl:w-1/3 md:w-2/4 overflow-hidden flex items-center justify-center"
        id="skyscrapper"
      >
        <Image
          src={skyScrapperPic}
          alt={'Skyscrapper'}
          width={455}
          height={666}
          priority={true}
        />
      </div>
    </div>
  )
}
