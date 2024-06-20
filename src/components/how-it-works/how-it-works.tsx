import { DescriptionP } from '../generics/description-p'
import { Title } from '../generics/title'
import { HowItWorksGrid } from './how-it-works-grid'

export function HowItWorks() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <Title>How it Works?</Title>
      <DescriptionP>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        aliquam nesciunt, consequatur quia dolore porro voluptas, id dignissimos
        ad dolor voluptatibus vitae veniam impedit animi odio repellendus earum
        nemo doloremque.
      </DescriptionP>
      <HowItWorksGrid />
    </div>
  )
}
