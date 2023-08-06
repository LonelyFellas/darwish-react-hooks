import { useCallback } from 'react';

export default function useTimeoutFn(callback: () => void, delay: number) {
  const isReady: () => boolean = useCallback(() => {
    return false;
  }, []);
  const cancel = useCallback(() => {}, []);
  const reset = useCallback(() => {}, []);
  return [isReady, cancel, reset] as const;
}
