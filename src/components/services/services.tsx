'use client'

import { servicesAnimation } from '@/animations/services/services-animation'
import { useLayoutEffect } from 'react'
import { GridCardServices } from './grid-cards-services'
import { ServicesTitle } from './services-title'

export function Services() {
  useLayoutEffect(() => {
    servicesAnimation()
  }, [])
  return (
    <div
      className="flex flex-col items-center justify-center gap-9 w-full"
      id="services"
    >
      <ServicesTitle />
      <GridCardServices />
    </div>
  )
}
