import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function servicesAnimation() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to('#services-title', {
    opacity: 100,
    y: 0,
    ease: 'power2.in',
    scrollTrigger: {
      trigger: '#services',
      scrub: true,
      markers: true,
      start: 'top 880px',
      end: 'bottom 900px',
    },
  })
}
