import * as React from 'react';

/**
 * 
 * @param defaultValue default value -> boolean
 * @returns [boolean, (settingValue: boolean) => void] -> Array
 */
type IBooleanFn = (settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
const useBoolean: (defaultValue: boolean) => [boolean, IBooleanFn] = (defaultValue: boolean) => {
  const [state, setState] = React.useState(defaultValue);

  const toggle = (settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setState(prev => typeof settingValue === 'boolean' ? settingValue : !prev)
  }
  return [state, toggle]
}
export default useBoolean