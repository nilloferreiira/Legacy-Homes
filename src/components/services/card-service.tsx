interface CardServiceProps {
  title: string
  description: string
  children: React.ReactNode
}

export function CardService({
  title,
  description,
  children,
}: CardServiceProps) {
  return (
    <div
      className={`w-full h-[472px] 
                bg-shark text-bg 
                hover:bg-transparent hover:text-shark transition-all 
                border-2 border-shark/60
                flex flex-col gap-9 items-center justify-center p-8 group
    `}
    >
      <div className="group-hover:text-shark transition-colors duration-300">
        {children}
      </div>
      <h1 className="font-semibold text-3xl">{title}</h1>
      <p className="text-base font-normal" id="description">
        {description}
      </p>
    </div>
  )
}