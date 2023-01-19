import useStorage from '.';

const useLocalStorage = (defaultKey?: string) => {
  const { get, save, clear } = useStorage('localStorage', defaultKey);
  
  return {
    get,
    save,
    clear,
  };
};

export default useLocalStorage;
