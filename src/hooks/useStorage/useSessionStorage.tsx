import useStorage from '.';
const useSessionStorage = (defaultKey?: string) => {
  const { get, save, clear } = useStorage('sessionStorage', defaultKey);

  return {
    get,
    save,
    clear,
  };
};

export default useSessionStorage;
