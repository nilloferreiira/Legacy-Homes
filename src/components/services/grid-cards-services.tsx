import { CleaningSVG } from '../svg-components/cleaning-svg'
import { FurnituresSVG } from '../svg-components/furnitures'
import { LogisticsSVG } from '../svg-components/logistics-svg'
import { MoreThenSVG } from '../svg-components/more-then-svg'
import { PaintingSVG } from '../svg-components/painting-svg'
import { PlumberIconSVG } from '../svg-components/plumber-icon-svg'
import { CardService } from './card-service'

export function GridCardServices() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto items-center justify-center w-full"
      id="grid-card-services"
    >
      {/* card  */}
      <CardService
        title={'Plumber'}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Saepe reiciendis hic incidunt laboriosam officiis autem,
                      molestias iste quas sed cumque itaque corporis amet nam. 
                      Exercitationem consequuntur neque sunt perferendis cupiditate.
                      `}
      >
        <PlumberIconSVG />
      </CardService>
      <CardService
        title={'Painting'}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Saepe reiciendis hic incidunt laboriosam officiis autem,
                      molestias iste quas sed cumque itaque corporis amet nam. 
                      Exercitationem consequuntur neque sunt perferendis cupiditate.
                      `}
      >
        <PaintingSVG />
      </CardService>
      <CardService
        title={'Logistics'}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Saepe reiciendis hic incidunt laboriosam officiis autem,
                      molestias iste quas sed cumque itaque corporis amet nam. 
                      Exercitationem consequuntur neque sunt perferendis cupiditate.
                      `}
      >
        <LogisticsSVG />
      </CardService>
      <CardService
        title={'Cleaning'}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Saepe reiciendis hic incidunt laboriosam officiis autem,
                      molestias iste quas sed cumque itaque corporis amet nam. 
                      Exercitationem consequuntur neque sunt perferendis cupiditate.
                      `}
      >
        <CleaningSVG />
      </CardService>
      <CardService
        title={'Furnitures'}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Saepe reiciendis hic incidunt laboriosam officiis autem,
                      molestias iste quas sed cumque itaque corporis amet nam. 
                      Exercitationem consequuntur neque sunt perferendis cupiditate.
                      `}
      >
        <FurnituresSVG />
      </CardService>
      <CardService
        title={'More then'}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Saepe reiciendis hic incidunt laboriosam officiis autem,
                      molestias iste quas sed cumque itaque corporis amet nam. 
                      Exercitationem consequuntur neque sunt perferendis cupiditate.
                      `}
      >
        <MoreThenSVG />
      </CardService>
    </div>
  )
}
