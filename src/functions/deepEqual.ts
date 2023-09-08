import { isObject, isSet, isMap, isDate } from '.';
import typeof_data from './typeof_data';

export default function deepEqual<T>(lfs: T, rfs: T) {
  if (typeof_data(lfs) !== typeof_data(rfs)) return false;
  let isEqual = lfs === rfs;
  if (isDate(lfs) && isDate(rfs)) {
    isEqual = lfs.getTime() === rfs.getTime();
  } else if ((isSet(lfs) && isSet(rfs)) || (isMap(lfs) && isMap(rfs))) {
    let arrLfs = Array.from(lfs);
    let arrRfs = Array.from(rfs);
    isEqual = deepEqualByArray(arrLfs, arrRfs);
  } else if (isObject(lfs) && isObject(rfs)) {
    isEqual = deepEqualByObject(lfs, rfs);
  } else if (Array.isArray(lfs) && Array.isArray(rfs)) {
    isEqual = deepEqualByArray(lfs, rfs);
  }

  return isEqual;
}
export function deepEqualByObject<T extends Record<any, any>>(lfs: T, rfs: T) {
  const lfsKey = Object.keys(lfs);
  const lfsValue = Object.values(lfs);

  const rfsKey = Object.keys(rfs);
  const rfsValue = Object.values(rfs);

  if (lfsKey.length !== rfsKey.length || lfsValue.length !== rfsValue.length) {
    return false;
  }

  lfsKey.sort();
  rfsKey.sort();
  lfsValue.sort();
  rfsValue.sort();
  for (let i = 0; i < lfsKey.length; i++) {
    if (lfsKey[i] !== rfsKey[i]) {
      return false;
    }
    if (isObject(lfsValue[i]) && isObject(rfsValue[i])) {
      if (!deepEqualByObject(lfsValue[i], rfsValue[i])) {
        return false;
      }
    } else if (Array.isArray(lfsValue[i]) && Array.isArray(rfsValue[i])) {
      if (!deepEqualByArray(lfsValue[i], rfsValue[i])) {
        return false;
      }
    } else if (lfsValue[i] !== rfsValue[i]) {
      return false;
    }
  }

  return true;
}
export function deepEqualByArray<T extends any[]>(lfs: T[], rfs: T[]) {
  if (lfs.length !== rfs.length) {
    return false;
  }

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
