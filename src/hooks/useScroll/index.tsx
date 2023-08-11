import React, { useEffect } from 'react';

export default function useScroll<T extends React.RefObject<HTMLElement>>(
  ref?: T
) {
  useEffect(() => {
    console.log(ref);
    if (ref && ref.current) {
      ref.current.addEventListener('scroll', () => {
        console.log('scroll');
      });
    }
  }, [ref?.current]);

  return {};
}
