type ElementLabel = keyof JSX.IntrinsicElements;
type ElementRef<T extends ElementLabel> =
  JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
    React.HTMLAttributes<unknown>,
    infer A
  >
    ? A
    : never;
type ElementClickEvent<T extends ElementLabel> = React.MouseEvent<
  ElementRef<T>,
  MouseEvent
>;
type ElementChangeEvent<T extends ElementLabel> = React.ChangeEvent<
  ElementRef<T>
>;
