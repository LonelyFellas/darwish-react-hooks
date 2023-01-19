import * as React from "react";
import useUpdateEffect from ".";
const UseUpdateEffect = () => {
  const [greeting, setGreeting] = React.useState("Hello World");

  useUpdateEffect(() => {
    console.log(greeting);
    
  }, [greeting])

  const handleClick = () => {
    setGreeting("Hello Darwish-react-hooks - " + Math.random()*1000)
  }

  return <button onClick={handleClick}>change greeting words </button>
}

export default UseUpdateEffect;