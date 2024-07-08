import { FacebookSVG } from '../svg-components/facebook-svg'
import { InstagramSVG } from '../svg-components/instagram-svg'
import { YoutubeSVG } from '../svg-components/youtube-svg'
import { TwitterSVG } from '../svg-components/twitter-svg'
import { DescriptionP } from '../generics/description-p'
import Link from 'next/link'

export function FooterHeader() {
  return (
    <div className="flex flex-col gap-2 lg:gap-5 items-center justify-center md:items-start w-full lg:w-2/4">
      <h1 className="font-base text-2xl lg:text-5xl md:tracking-wide">
        Legacy Homes
      </h1>
      <DescriptionP variant="left" color="white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime ex
        iste, ad minima explicabo nesciunt, alias molestiae veritatis cupiditate
        exercitationem voluptate neque architecto non provident tenetur debitis,
        obcaecati rerum.
      </DescriptionP>
      <div className="flex items-center justify-center gap-5">
        <Link href={'#'}>
          <FacebookSVG />
        </Link>
        <Link href={'#'}>
          <InstagramSVG />
        </Link>
        <Link href={'#'}>
          <YoutubeSVG />
        </Link>
        <Link href={'#'}>
          <TwitterSVG />
        </Link>
      </div>
    </div>
  )
}
