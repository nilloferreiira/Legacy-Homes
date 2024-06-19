import gsap from 'gsap'

export function homeAnimation() {
  gsap.fromTo(
    '#skyscrapper',
    { opacity: 0, y: 50 },
    { opacity: 100, y: 0, duration: 0.7, ease: 'slow' },
  )

  gsap.fromTo(
    '#title',
    { opacity: 0, x: -100 },
    { opacity: 100, x: 0, duration: 0.5, ease: 'slow' },
  )
}
