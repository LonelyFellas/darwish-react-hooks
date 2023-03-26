import useReactState from '.';

const UseReactState = () => {
  const state = useReactState({
    age: 25,
    name: 'darwish'
  });
  const handleAgePlusPlus = () => {
    setTimeout(() => {
      state.age++
    }, 120)
  }
  return (
    <>
      <h1>Age: {state.age}, Name: {state.name}</h1>
      <button onClick={handleAgePlusPlus}>Age ++</button>
      <button onClick={() => state.name = state.name === 'darwish' ? 'cat' : 'darwish'}>Change Name</button>
    </>
  );
};
export default UseReactState;
