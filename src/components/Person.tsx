type PersonProps = {
    name : {
        first: string,
        last: string
    }
}
export const Person = (props: PersonProps) => {
  return (
    <div>{props.name.last} {props.name.first}</div>
  )
}
