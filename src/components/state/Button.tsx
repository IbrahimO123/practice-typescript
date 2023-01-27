type ButtonProps = {
    title: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.handleClick} >{props.title}</button>
  )
}
