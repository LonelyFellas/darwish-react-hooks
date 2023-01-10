import useHover from ".";
const UseHoverDemo = () => {
  const element = (hasHovered: boolean) => (
    <div>
      hover me! { hovered && "Thanks!"}
    </div>
  )
  const [hoverable, hovered] = useHover(element);
  return (
    <div>
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>
    </div>
  )
}

export default UseHoverDemo;
