import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function servicesAnimation() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to('#services-title', {
    opacity: 100,
    y: 0,
    duration: 0.5,
    ease: 'power1.in',
    scrollTrigger: {
      trigger: '#services-title',
      scrub: true,
      start: 'top 800px',
      end: 'bottom 880px',
    },
  })
}
