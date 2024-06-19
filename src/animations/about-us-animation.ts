import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export function aboutUsAnimation() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.fromTo(
    '#about-us-image',
    { opacity: 0, y: 160 },
    {
      opacity: 100,
      y: 0,
      duration: 0.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '#about-us-trigger',
        scrub: true,
        start: 'top 600px',
        end: 'bottom 900px',
      },
    },
  )
}
