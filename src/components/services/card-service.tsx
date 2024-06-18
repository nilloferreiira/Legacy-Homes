export function CardService() {
  return (
    <div
      className={`w-full h-[472px] 
                bg-shark text-bg 
                hover:bg-transparent hover:text-shark transition-all 
                border-2 border-shark/60
                flex flex-col gap-9 items-center justify-center p-8    
    `}
    >
      <div>Icon</div>
      <h1 className="">Plumber</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae natus
        quo nesciunt optio illo blanditiis ad cupiditate pariatur, dolore culpa
        sapiente magni itaque, doloremque magnam suscipit, totam saepe ut
        officiis.
      </p>
    </div>
  )
}
