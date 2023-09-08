import isBrowser from './isBrowser';
import isBlanks from './isBlanks';

export const isDate = (value: unknown): value is Date =>
  objProtoCallType(value, 'date');
export const isObject = (value: unknown): value is Record<any, any> =>
  objProtoCallType(value, 'object');
export const isSet = (value: unknown): value is Set<any> =>
  objProtoCallType(value, 'set');
export const isMap = (value: unknown): value is Map<any, any> =>
  objProtoCallType(value, 'map');
export const isNull = (value: unknown): value is null =>
  objProtoCallType(value, 'null');
export const isBigint = (value: unknown): value is bigint =>
  typeof value === 'bigint';
export const isSymbol = (value: unknown): value is symbol =>
  typeof value === 'symbol';
export const isFunction = (value: unknown): value is Function =>
  typeof value === 'function';
export const isString = (value: unknown): value is string =>
  typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';
export const isNumber = (value: unknown): value is number =>
  typeof value === 'number';
export const isUndef = (value: unknown): value is undefined =>
  typeof value === 'undefined';
export { isBrowser, isBlanks };

const objProtoCallType = <T>(value: unknown, type: T) =>
  Object.prototype.toString.call(value).slice(8, -1).toLowerCase() === type;
