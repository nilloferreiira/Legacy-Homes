import { AboutUs } from '@/components/about-us/about-us'
import { DescriptionP } from '@/components/generics/description-p'
import { Title } from '@/components/generics/title'
import { Header } from '@/components/header/header'
import { HomeContainer } from '@/components/home/home'
import { HowItWorksGrid } from '@/components/how-it-works/how-it-works-grid'
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
        <HowItWorksGrid />
      </div>
    </div>
  )
}
