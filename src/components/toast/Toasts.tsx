type horizontalProps = "left" | "center" | "right";
type verticalProps = "top" |  "center" | "bottom";

type ToastProsp = {
    position: Exclude <`${horizontalProps}-${verticalProps}`, "center-center"> | 'center'
}
export const Toasts = ({position}: ToastProsp) => {
  return (
    <div>Toast Notofication Position {position}</div>
  )
}
