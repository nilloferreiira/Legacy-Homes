import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function propertiesAnimation() {
  gsap.registerPlugin(ScrollTrigger)

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#properties-trigger',
        scrub: true,
        start: 'top 680px',
        end: 'bottom 920px',
      },
    })
    .fromTo(
      '#property-1',
      {
        opacity: 0,
        y: 160,
      },
      {
        opacity: 100,
        y: 0,
      },
    )
    .fromTo(
      '#property-2',
      {
        opacity: 0,
        y: 160,
      },
      {
        opacity: 100,
        y: 0,
      },
    )
    .fromTo(
      '#property-3',
      {
        opacity: 0,
        y: 160,
      },
      {
        opacity: 100,
        y: 0,
      },
    )
}
