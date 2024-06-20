import { PropertyCard } from './property-card'
import Property1 from '../../assets/property-1.png'
import Property2 from '../../assets/property-2.png'
import Property3 from '../../assets/property-3.png'
export function PropertiesGrid() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-5 ">
      <PropertyCard
        image={Property1}
        title={
          '1 Bedroom Apartment with No Commission Free Bills and Parking with Tawtheeq'
        }
        location={'Palika Market, Delhi'}
        price={'Rs. 2,00,000.00/year'}
        propertyInfo={{
          area: '920',
          bedrooms: '4',
          bathrooms: '3',
        }}
      />
      <PropertyCard
        image={Property2}
        title={
          '1 Bedroom Apartment with No Commission Free Bills and Parking with Tawtheeq'
        }
        location={'Palika Market, Delhi'}
        price={'Rs. 2,00,000.00/year'}
        propertyInfo={{
          area: '920',
          bedrooms: '4',
          bathrooms: '3',
        }}
      />
      <PropertyCard
        image={Property3}
        title={
          '1 Bedroom Apartment with No Commission Free Bills and Parking with Tawtheeq'
        }
        location={'Palika Market, Delhi'}
        price={'Rs. 2,00,000.00/year'}
        propertyInfo={{
          area: '920',
          bedrooms: '4',
          bathrooms: '3',
        }}
      />
    </div>
  )
}
