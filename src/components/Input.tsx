type InputProps = {
  type: "text" | "number" | "password" | "email";
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = (props: InputProps) => {
  const { type, value, handleChange } = props;
  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleChangeEvent");
  };
  return <input type={type} value={value} onChange={handleChangeEvent}></input>;
};
