'use client'

import { aboutUsAnimation } from '@/animations/about-us-animation'
import { useLayoutEffect } from 'react'
import AboutUsImg from '../../assets/about-us-image.png'
import Image from 'next/image'

export function AboutUsImage() {
  useLayoutEffect(() => {
    aboutUsAnimation()
  }, [])

  return (
    <div
      className="w-full 2xl:w-1/3 md:w-2/4 flex items-center justify-center opacity-0"
      id="about-us-image"
    >
      <Image src={AboutUsImg} alt={''} width={500} height={620} />
    </div>
  )
}
