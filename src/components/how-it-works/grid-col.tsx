interface GridColProps {
  children: React.ReactNode
}

export function GridCol({ children }: GridColProps) {
  return <div className="flex flex-col divide-y-2">{children}</div>
}
