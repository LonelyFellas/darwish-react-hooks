import { useReducer } from "react";


const updateReducer = (num: number) => (num + 1) % 1_000_000

export default function useUpdate()  {
  const [__, update] = useReducer(updateReducer, 0);

  return update;
}