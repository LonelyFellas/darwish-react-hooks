import * as React from 'react';

/**
 * 
 * @param toggleValue default value -> boolean
 * @returns [boolean, (settingValue: boolean) => void] -> Array
 */
type IToggleFn = (settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
const useToggle: (defaultValue: boolean) => [boolean, IToggleFn] = (defaultValue: boolean) => {
  const [state, setState] = React.useState(defaultValue);

  const toggle = (settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setState(prev => typeof settingValue === 'boolean' ? settingValue : !prev)
  }
  return [state, toggle]
}
export default useToggle