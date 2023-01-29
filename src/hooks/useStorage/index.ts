import React from 'react'
import useDisplayDevError from '../useDisplayDevError'
import isBlanks from '../../functions/isBlanks'
const useStorage: (type: 'localStorage' | 'sessionStorage', defaultKey?: string) => {
  get: (key?: string) => void,
  save: (props: {value: unknown, key?: string}) => void,
  clear: (key?: string) => void
  isSuccess: boolean
} = (type, defaultKey) => {

  const [isSuccess, setIsSuccess] = React.useState(false);
  const dispatchErrFn = useDisplayDevError();

  const get = React.useCallback((key?: string, isErrorMsg?: boolean) => {
    let storageKey = storageKeyBoolFn(key)
    const storageValue = window.sessionStorage.getItem(storageKey);
    console.log("");
    
    if (isBlanks(storageValue)) {
      if (isErrorMsg) {
        dispatchErrFn("没有缓存，请确认缓存KEY是否正确");
      }
      return null
    } else {
      return JSON.parse(storageValue!);
    }
  }, [])

  const save = (props: {value?: unknown, key?: string}) => {
    if(!errorBool(props.key))  {
      let storageKey = storageKeyBoolFn(props.key);
      window[type].setItem(storageKey, JSON.stringify(props.value))
      if (window[type].getItem(storageKey)) {
        setIsSuccess(true)
      } else {
        setIsSuccess(false)      
        dispatchErrFn('缓存没有保存成功')
      }
    }

  }

  const clear = (key?: string) => {
    if(!errorBool(key)) {
      let storageKey = storageKeyBoolFn(key);
      window[type].removeItem(storageKey);
      console.log("get()", get(__dirname, false));
      
      if (isBlanks(get())) {
        setIsSuccess(true)
      }
    }
  }

  const storageKeyBoolFn = React.useCallback((key?: string) => {
    return (typeof key ? key : defaultKey)!
  }, [])

  const errorBool = (setKey?: string) => {
    let bool = false;
    if (typeof setKey === 'undefined' && typeof defaultKey === 'undefined') {
      dispatchErrFn('缓存没有保存成功')
      setIsSuccess(false);
      bool = true;
    }
    return bool
  }

  return {
    get,
    save,
    clear,
    isSuccess
  }
}

export default useStorage

