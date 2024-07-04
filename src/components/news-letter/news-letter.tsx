import { NewsLetterEmail } from './news-letter-email'
import Image from 'next/image'
import BuildingPNG from '../../assets/buildin-png.png'
export function NewsLetter() {
  return (
    <div className="w-full relative">
      <div className="hidden lg:block absolute -bottom-0 overflow-hidden">
        <Image src={BuildingPNG} alt={''} priority />
      </div>
      <NewsLetterEmail />
    </div>
  )
}
