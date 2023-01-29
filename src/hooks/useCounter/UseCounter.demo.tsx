import useCounter from ".";

const UseCounterDemo = () => {
  const [current, { inc, dec, set, reset }] = useCounter(10, { min: 1, max: 10 });
  
  return (
    <div>
      <p>{current} [max: 10; min: 1;]</p>
      <div>
        <button
          type="button"
          onClick={() => {
            inc();
          }}
          style={{ marginRight: 8 }}
        >
          inc()
        </button>
        <button
          type="button"
          onClick={() => {
            dec();
          }}
          style={{ marginRight: 8 }}
        >
          dec()
        </button>
        <button
          type="button"
          onClick={() => {
            set(3);
          }}
          style={{ marginRight: 8 }}
        >
          set(3)
        </button>
        <button type="button" onClick={reset} style={{ marginRight: 8 }}>
          reset()
        </button>
      </div>
    </div>
  )
}
  

export default UseCounterDemo