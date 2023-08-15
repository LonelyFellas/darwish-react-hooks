import { isMap, isObject, isSet } from '.';
import cloneDeep from './cloneDeep';

export default function deepMerge<
  T extends Record<string, any>,
  U extends Record<string, any>
>(lfs: T, rfs: U) {
  const cloneLfs = cloneDeep(lfs);
  const arr2 = Object.entries(rfs);

  for (let i = 0; i < arr2.length; i++) {
    const key2 = arr2[i][0];
    const value2 = arr2[i][1];
    if (key2 in rfs) {
      const value1 = lfs[key2];
      let currentVal;
      if (isObject(value1) && isObject(value2)) {
        currentVal = { ...value1, ...value2 };
      } else if (Array.isArray(value1) && Array.isArray(value2)) {
        currentVal = Array.from(new Set([...value1, ...value2]));
      } else if (isSet(value1) && isSet(value2)) {
        currentVal = new Set([...value1, ...value2]);
      } else if (isMap(value1) && isMap(value2)) {
        currentVal = new Map([...value1, ...value2]);
      } else {
        currentVal = value2;
      }
      // @ts-ignore
      cloneLfs[key2 as keyof T] = currentVal;
    } else {
      cloneLfs[key2 as keyof T] = value2;
    }
  }
  return cloneLfs;
}
