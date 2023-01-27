interface OscarProps {
    children: React.ReactNode
}
export const Oscar = (p:OscarProps) => {
  return (
    <div>{p.children}</div>
  )
}
