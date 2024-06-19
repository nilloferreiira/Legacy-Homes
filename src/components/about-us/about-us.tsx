import { Button } from '../ui/button'
import { AboutUsImage } from './about-us-image'

export function AboutUs() {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-start justify-center 2xl:justify-between mx-auto gap-5"
      id="about-us"
    >
      <div
        className="w-full md:w-3/4 2xl:w-2/4 flex flex-col items-center md:items-start justify-center md:justify-start gap-5 2xl:gap-10 lg:py-20"
        id="about-us-trigger"
      >
        <h1 className="font-extrabold text-4xl lg:text-6xl">About Us</h1>
        <p className="font-normal text-sm md:text-base text-lightGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          perferendis exercitationem totam consequuntur consequatur, esse
          possimus, eaque quidem molestias quam laboriosam provident, a quaerat
          minus vero repellendus molestiae iusto corrupti. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Laborum corporis natus
          laudantium, earum enim corrupti dolor velit sunt error tempora culpa
          optio atque vel repellendus est. Commodi voluptatum illo veniam. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          perspiciatis laboriosam temporibus explicabo debitis. Quasi blanditiis
          praesentium ad iusto vel repellendus voluptate vero explicabo. Alias
          quas eaque unde nostrum illo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consectetur temporibus quisquam facere praesentium,
          iure adipisci consequuntur distinctio. Nemo, quasi nisi est
          aspernatur, impedit similique, suscipit consequatur quia voluptas
          harum odit.
        </p>

        <Button
          size={'lg'}
          className="text-sm font-light rounded-none bg-shark"
        >
          Learn More
        </Button>
      </div>
      <AboutUsImage />
    </div>
  )
}
