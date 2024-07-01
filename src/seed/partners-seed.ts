import { StaticImageData } from 'next/image'
import PartnerImage from '../assets/partner-1.png'

interface Partner {
  firstName: string
  lastName: string
  position: string
  imageUrl: StaticImageData
}

export const partners: Partner[] = [
  {
    firstName: 'Aarman',
    lastName: 'Cox',
    position: 'Co-Founder',
    imageUrl: PartnerImage,
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    position: 'Chief Executive Officer',
    imageUrl: PartnerImage,
  },
  {
    firstName: 'Charlie',
    lastName: 'Brown',
    position: 'Chief Technology Officer',
    imageUrl: PartnerImage,
  },
  {
    firstName: 'Diana',
    lastName: 'Evans',
    position: 'Chief Marketing Officer',
    imageUrl: PartnerImage,
  },
  {
    firstName: 'Ethan',
    lastName: 'Williams',
    position: 'Chief Operating Officer',
    imageUrl: PartnerImage,
  },
]
