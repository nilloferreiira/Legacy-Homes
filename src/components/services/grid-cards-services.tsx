import { CardService } from './card-service'

export function GridCardServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto items-center justify-center w-full">
      {/* card  */}
      <CardService />
      <CardService />
      <CardService />
      <CardService />
      <CardService />
      <CardService />
    </div>
  )
}
