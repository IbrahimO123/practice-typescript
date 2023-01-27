interface HeadingProps {
    children: string,
}

export const Heading = (p: HeadingProps) => {
  return (
    <h2>{p.children}</h2>
  )
}
