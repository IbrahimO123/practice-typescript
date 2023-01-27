export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <h2>Private Profile Component</h2>
      <h2>Welcome {name}, what can we help with today!</h2>
    </div>
  );
};
