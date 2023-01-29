import isBrowser from '../../functions/isBrowser';
import useDisplayDevError from '../useDisplayDevError';

const useTitle: (titleText: string) => void = (titleText) => {
  const inBrowser = isBrowser();

  const dispatchError = useDisplayDevError();
  if (inBrowser) {
    document.title = titleText;
  } else {
    debugger
    dispatchError('当前不是浏览器环境')
  }
};

export default useTitle;
