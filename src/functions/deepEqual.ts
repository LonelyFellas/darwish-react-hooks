import { isObject } from '.';

export default function deepEqual<T>(lfs: T, rfs: T) {
  let isEqual = true;
  if (isObject(lfs) && isObject(rfs)) {
    isEqual = deepEqualByObject(lfs, rfs);
  }
  if (Array.isArray(lfs) && Array.isArray(rfs)) {
    isEqual = deepEqualByArray(lfs, rfs);
  }

  return isEqual;
}
export function deepEqualByObject<T extends Record<any, any>>(lfs: T, rfs: T) {
  const key1 = Object.keys(lfs);
  const value1 = Object.values(lfs);

  const key2 = Object.keys(rfs);
  const value2 = Object.values(rfs);

  if (key1.length !== key2.length || value1.length !== value2.length) {
    return false;
  }

  key1.sort();
  key2.sort();
  value1.sort();
  value2.sort();
  for (let i = 0; i < key1.length; i++) {
    if (key1[i] !== key2[i]) {
      return false;
    }
    if (isObject(value1[i]) && isObject(value2[i])) {
      if (!deepEqualByObject(value1[i], value2[i])) {
        return false;
      }
    } else if (Array.isArray(value1[i]) && Array.isArray(value2[i])) {
      if (!deepEqualByArray(value1[i], value2[i])) {
        return false;
      }
    } else if (value1[i] !== value2[i]) {
      return false;
    }
  }

  return true;
}
export function deepEqualByArray<T extends any[]>(lfs: T[], rfs: T[]) {
  lfs.sort();
  rfs.sort();
  for (let i = 0; i < lfs.length; i++) {
    if (isObject(lfs[i]) && isObject(rfs[i])) {
      if (!deepEqualByObject(lfs[i], rfs[i])) {
        return false;
      }
    } else if (Array.isArray(lfs[i]) && Array.isArray(rfs[i])) {
      if (!deepEqualByArray(lfs[i], rfs[i])) {
        return false;
      }
    } else if (lfs[i] !== rfs[i]) {
      return false;
    }
  }
  return true;
}
