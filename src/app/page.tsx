import { AboutUs } from '@/components/about-us/about-us'
import { DescriptionP } from '@/components/generics/description-p'
import { Title } from '@/components/generics/title'
import { Header } from '@/components/header/header'
import { HomeContainer } from '@/components/home/home'
import { HowItWorksCard } from '@/components/how-it-works/how-it-works-card'
import { Properties } from '@/components/properties/properties'
import { Services } from '@/components/services/services'

export default function Home() {
  return (
    <div className="w-full px-8 md:px-32 py-4 md:py-8 flex flex-col gap-10 md:gap-20">
      <Header />
      <HomeContainer />
      <Services />
      <AboutUs />
      <Properties />
      {/* how it works  */}
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <Title>How it Works?</Title>
        <DescriptionP>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          aliquam nesciunt, consequatur quia dolore porro voluptas, id
          dignissimos ad dolor voluptatibus vitae veniam impedit animi odio
          repellendus earum nemo doloremque.
        </DescriptionP>
        {/* how it word grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:divide-x-2 divide-y-2 xl:divide-y-0 xl:divide">
          {/* how it works card  */}
          <HowItWorksCard />
          <HowItWorksCard />
          <HowItWorksCard />
          <HowItWorksCard />
          <HowItWorksCard />
          <HowItWorksCard />
        </div>
      </div>
    </div>
  )
}
