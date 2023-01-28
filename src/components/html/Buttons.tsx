type ButtonProps = {
    variant: "primary" | "secondary",
    children: string
} & Omit<React.ComponentProps<"button">, "children">

export const Buttons = ({variant, children, ...rest} : ButtonProps) => {
  return (
    <button {...rest} className={`class-name-${variant}`} >{children}</button>
  )
}
