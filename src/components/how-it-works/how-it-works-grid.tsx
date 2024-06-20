import { GridCol } from './grid-col'
import { HowItWorksCard } from './how-it-works-card'
import HouseLooking from '../../assets/House-searching-pana.png'
import BusinessMan from '../../assets/Businessman-cuate.png'
import Marketing from '../../assets/Marketing-cuate.png'
import InboxCleanUp from '../../assets/Inbox-cleanup-cuate.png'
import BackToCuate from '../../assets/Back-to-back-cuate.png'
import BusinessDeal from '../../assets/Business-deal-cuate.png'

export function HowItWorksGrid() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:divide-x-2">
      {/* left  */}
      <GridCol>
        <HowItWorksCard
          title={'Looking for a tenant?'}
          description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestiae eius reiciendis laborum quo eveniet sed.
                        `}
          image={HouseLooking}
        />

        <HowItWorksCard
          title={'marketing & promotions'}
          description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestiae eius reiciendis laborum quo eveniet sed.
                        `}
          image={Marketing}
        />
        <HowItWorksCard
          title={'tenant selects property'}
          description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestiae eius reiciendis laborum quo eveniet sed.
                        `}
          image={BackToCuate}
        />
      </GridCol>
      {/* right  */}
      <GridCol>
        <HowItWorksCard
          title={'A dedicated'}
          description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestiae eius reiciendis laborum quo eveniet sed.
                        `}
          image={BusinessMan}
        />
        <HowItWorksCard
          title={'freedom from bogus callers'}
          description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestiae eius reiciendis laborum quo eveniet sed.
                        `}
          image={InboxCleanUp}
        />

        <HowItWorksCard
          title={'Deal closure'}
          description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestiae eius reiciendis laborum quo eveniet sed.
                        `}
          image={BusinessDeal}
        />
      </GridCol>
    </div>
  )
}
