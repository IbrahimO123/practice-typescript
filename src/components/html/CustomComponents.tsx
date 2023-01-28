import { Greet } from "../state/Greet";


export const CustomComponents = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>CustomComponents {props.name} </div>
  )
}
