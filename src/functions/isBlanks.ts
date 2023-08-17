/**
 *
 * @param data 支持所有基本类型,还有[],{},Set,Map,Date的判断，true则数据空或者数据错误
 */
const isBlanks: <T>(data: T) => boolean = (data) => {
  if (data === Infinity) {
    return !!data;
  }
  // 判断数组类型
  if (Array.isArray(data)) {
    return !data.length;
  }
  // 判断Object类型
  if (typeof data === 'object' && data !== null) {
    const propsArr = Object.getOwnPropertyNames(data);
    return !propsArr.length;
  }

  // 判断空格的字符串和转义符
  if (typeof data === 'string') {
    return /^\s*$/.test(data);
  }

  // 判断空Set和空Map
  if (data instanceof Set || data instanceof Map) {
    return data.size === 0;
  }

  // 判断错误时间
  if (data instanceof Date) {
    return Number.isNaN(data.getTime());
  }
  return !data;
};

export default isBlanks;
