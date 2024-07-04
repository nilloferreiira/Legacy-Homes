import { Input } from '@/components/ui/input'
import { MoveRight } from 'lucide-react'

export function NewsLetter() {
  return (
    <div className="w-full flex flex-col text-center items-end gap-10 bg-shark px-8 md:px-32 py-4 md:py-20 ">
      <div className="text-white w-1/3 flex flex-col text-left items-end justify-normal gap-7">
        <h1 className="font-bold text-5xl">Get Our Monthly Newsletter</h1>
        <p className="font-normal text-base ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{' '}
        </p>
        <div className="w-full flex bg-white/20 pl-4">
          <Input
            placeholder="Input your email adress in here"
            className={`
                          bg-transparent 
                          w-full
                          h-16     
                          outline-none ring-0 focus-visible:ring-0 
                          focus:ring-0 border-0 focus:border-0 
                          focus:outline-none focus-visible:ring-offset-0
                          placeholder:text-white/80
                          `}
          />
          <button
            className={`
                      bg-white
                      flex items-center justify-center   
                      h-16 w-20
                      hover:bg-white/80
                      transition-all
                      outline-none ring-0 
                      focus-visible:ring-0 focus:ring-0
                        `}
          >
            <MoveRight
              color="black"
              size={24}
              className="rounded-md border border-black p-1"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
