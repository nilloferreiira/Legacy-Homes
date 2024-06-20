import { GridCol } from './grid-col'
import { HowItWorksCard } from './how-it-works-card'

export function HowItWorksGrid() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:divide-x-2">
      {/* left  */}
      <GridCol>
        <HowItWorksCard />
        <HowItWorksCard />
        <HowItWorksCard />
      </GridCol>
      {/* right  */}
      <GridCol>
        <HowItWorksCard />
        <HowItWorksCard />
        <HowItWorksCard />
      </GridCol>
    </div>
  )
}
