import useHover from ".";
const UseHoverDemo = () => {
  const element = (hovered: boolean) => (
    <div>
      hover me! { hovered && "Thanks!"}
    </div>
  )
  return (
    <div>
      
    </div>
  )
}

export default UseHoverDemo;
