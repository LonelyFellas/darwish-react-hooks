import * as React from 'react';

const useFirstMountState = () => {
  const firstStateRef = React.useRef<boolean>(true);

  if (firstStateRef.current) {
    firstStateRef.current = false;

    return true
  }

  return firstStateRef.current;
}

export default useFirstMountState;