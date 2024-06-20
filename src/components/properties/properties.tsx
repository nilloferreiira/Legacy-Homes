import { DescriptionP } from '../generics/description-p'
import { Title } from '../generics/title'
import { PropertiesGrid } from './properties-grid'

export function Properties() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-10"
      id="properties"
    >
      <Title>Property</Title>
      <DescriptionP>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, aliquid.
        Laboriosam commodi voluptatum porro, dolorem repellendus aliquid ullam
        rerum hic, aspernatur praesentium nostrum iure assumenda similique totam
        nobis, mollitia consequuntur!
      </DescriptionP>
      <PropertiesGrid />
    </div>
  )
}
