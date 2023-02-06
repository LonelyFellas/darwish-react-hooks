import useList from '.';

const UseListDemo = () => {
  const [
    list,
    {
      set,
      push,
      updateAt,
      insertAt,
      update,
      updateFirst,
      upsert,
      sort,
      filter,
      removeAt,
      clear,
      reset,
    },
  ] = useList([1, 2, 3, 4, 5]);

  return (
    <div>
      <button onClick={() => set([1, 2, 3])}>Set to [1, 2, 3]</button>
      <button onClick={() => push(Date.now())}>Push timestamp</button>
      <button onClick={() => updateAt(1, Date.now())}>
        Update value at index 1
      </button>
      <button onClick={() => updateFirst(Date.now())}>
      updateFirst
      </button>
      <button onClick={() => insertAt(1, Date.now())}>
        insertAt
      </button>
      <button onClick={() => removeAt(1)}>Remove element at index 1</button>
      <button onClick={() => filter((item) => item % 2 === 0)}>
        Filter even values
      </button>
      <button onClick={() => sort((a, b) => a - b)}>Sort ascending</button>
      <button onClick={() => sort((a, b) => b - a)}>Sort descending</button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
};

export default UseListDemo;
