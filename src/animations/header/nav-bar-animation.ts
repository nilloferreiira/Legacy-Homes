import gsap from 'gsap'

export function navBarAnimation() {
  gsap.context(() => {
    gsap
      .timeline()
      .fromTo(
        '#navlinks',
        { height: 0 },
        { height: 'auto', duration: 0.5, ease: 'power2.out' },
      )
      .fromTo(
        '#contact',
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        '-=0.5',
      )
      .fromTo(
        '#about-us',
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        '-=0.3',
      )
      .fromTo(
        '#properties',
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        '-=0.3',
      )
      .fromTo(
        '#services',
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        '-=0.3',
      )
      .fromTo(
        '#home',
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.3 },
        '-=0.3',
      )
  }, '#navbar')

  return gsap.killTweensOf('#navbar')
}

export function navBarCloseAnimation() {
  return new Promise<void>((resolve) => {
    gsap.context(() => {
      gsap
        .timeline({
          onComplete: () => {
            resolve()
          },
        })
        .to('#home', { opacity: 0, y: -20, duration: 0.3 }, '-=0.3')
        .to('#services', { opacity: 0, y: -20, duration: 0.3 }, '-=0.2')
        .to('#properties', { opacity: 0, y: -20, duration: 0.3 }, '-=0.2')
        .to('#about-us', { opacity: 0, y: -20, duration: 0.3 }, '-=0.2')
        .to('#contact', { opacity: 0, y: -20, duration: 0.3 }, '-=0.2')
        .to('#navlinks', { height: 0, duration: 0.5, ease: 'power2.out' })
    }, '#navbar')
    return gsap.killTweensOf('#navbar')
  })
}
