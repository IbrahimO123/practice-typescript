type TextOwnProps<T extends React.ElementType> = {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "info";
  children: React.ReactNode;
  as?: T;
};

type TextProps<T extends React.ElementType> = TextOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof TextOwnProps<T>>;

export const Text = <T extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<T>) => {
  const Component = as || "div";
  return (
    <Component className={`class-name-${size}-${color}`}>{children}</Component>
  );
};
