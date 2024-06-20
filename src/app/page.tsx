import { AboutUs } from '@/components/about-us/about-us'
import { Header } from '@/components/header/header'
import { HomeContainer } from '@/components/home/home'
import { HowItWorks } from '@/components/how-it-works/how-it-works'
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
      <HowItWorks />
    </div>
  )
}
