'use client'

import { servicesAnimation } from '@/animations/services/services-animation'
import { useLayoutEffect } from 'react'

export function Services() {
  useLayoutEffect(() => {
    servicesAnimation()
  }, [])
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 w-full"
      id="services"
    >
      <div
        className="flex flex-col items-center justify-center gap-8 opacity-0"
        id="services-title"
      >
        <h1 className="uppercase font-extrabold text-4xl lg:text-6xl">
          services
        </h1>
        <p className="font-light text-center">
          {` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s....`}
        </p>
      </div>
    </div>
  )
}
