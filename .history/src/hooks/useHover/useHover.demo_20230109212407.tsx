import useHover from ".";
const UseHoverDemo = () => {
  const element = (hovered: boolean) => (
    <div>
      hover me! { hovered && "Thanks!"}
    </div>
  )
  const [hoverable, hovered] = useHover(element);
  return (
    <div>
      {hoverable}
    </div>
  )
}

export default UseHoverDemo;
