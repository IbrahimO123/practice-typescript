type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          Welcome {props.name}! You have {messageCount} unread messages
        </div>
      ) : (
        <div>Welcome Guest</div>
      )}
    </div>
  );
};
