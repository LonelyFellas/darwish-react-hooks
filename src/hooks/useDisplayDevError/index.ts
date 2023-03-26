import * as React from 'react';

/**
 * 
 * @param errorText 默认错误信息
 * @returns 返回出发错误信息的函数，⚠️注意：错误信息只会在开发环境触发
 */
const useDisplayDevError: <T>(errorText?: T) => (err?: T) => void = (errorText) => {
  const [error, setError] = React.useState(errorText);

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development' && error) {
      console.error(errorText);
    }
  }, [error])

  const dispatchError = React.useCallback((err?: any) => {
    return setError(typeof err === 'undefined' ? errorText : err)
  }, [])

  return dispatchError
}

export default useDisplayDevError