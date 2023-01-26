type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
export const PersonLists = (props: PersonListProps) => {
  return (
    <div>
      <h2>List of People</h2>
      <div>
        {props.names.map((name) => (
          <div key={name.last}>
            {name.first} {name.last}
          </div>
        ))}
      </div>
    </div>
  );
};
