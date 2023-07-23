/**
 *
 * @param data 实现一个深拷贝。
 */
function cloneDeep<T>(data: T): T {
  if (Array.isArray(data)) {
    return data.map((child) => cloneDeep(child)) as T;
  }
  if (typeof data === 'object' && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, cloneDeep(v)])
    ) as T;
  }
  return data;
}

export default cloneDeep;
