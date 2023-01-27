type listProps<T> = {
  items: T[];
  onClick: (value:T) => void;
};

export const Lists =<T extends {name:string}>({ items, onClick }: listProps<T>) => {
  return (
    <div>
      <h4>List of items</h4>
        {items.map((item, index) => (
          <div key={index} onClick={() => onClick(item)}>{item.name} </div>
        ))}
    </div>
  );
};
