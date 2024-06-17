import { Header } from '@/components/header/header'
import { HomeContainer } from '@/components/home/home'

export default function Home() {
  return (
    <div className="w-full px-8 md:px-32 py-4 md:py-8 flex flex-col gap-10">
      <Header />
      <HomeContainer />
    </div>
  )
}
