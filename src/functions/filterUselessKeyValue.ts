import { isObject } from '.';
import cloneDeep from './cloneDeep';
import isBlanks from './isBlanks';

export default function filterUselessKeyValue<T extends Record<string, any>>(
  obj: T,
  isFilterEmptyString: boolean = false
): T {
  if (isObject(obj)) {
    const cloneObj = cloneDeep(obj);
    Object.keys(cloneObj).forEach((key) => {
      const bool = isFilterEmptyString
        ? isBlanks(cloneObj[key])
        : cloneObj[key] === undefined || cloneObj[key] === null;
      if (bool) {
        delete cloneObj[key];
      }
    });
    return cloneObj;
  } else {
    return obj;
  }
}
