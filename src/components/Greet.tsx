type GreetProps = {
    name : string,
    messageCount : number,
};

export const Greet = (props: GreetProps) => {
  return (
    <div>Welcome {props.name}! You have unread messages</div>
  )
}
