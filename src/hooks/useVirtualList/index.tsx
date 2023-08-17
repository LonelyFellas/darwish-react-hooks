import { useEffect } from 'react';

type UseVirtualListOption<T> = {
  containerTarget: React.MutableRefObject<HTMLDivElement | null>;
  wrapperTarget: React.MutableRefObject<HTMLDivElement | null>;
  itemHeight: number | ((index: number, data: T) => number);
  overScan: number;
};
export default function useVirtualList<T = any>(
  originalList: T[],
  options: UseVirtualListOption<T>
) {
  const { containerTarget, wrapperTarget, itemHeight, overScan } = options;

  useEffect(() => {
    if (wrapperTarget.current) {
      debugger;
      console.log(wrapperTarget.current.offsetHeight);

      // wrapperTarget.current.clientHeight = originalList.length * itemHeight;
    }
  }, [wrapperTarget.current]);

  return [
    [...new Array(15).keys()].map((item, index) => {
      return { data: item, index };
    }),
  ];
}
