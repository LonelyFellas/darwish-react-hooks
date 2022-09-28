/**
 *
 * @param data 判断真假判断所需的数据
 */
const isBlanks: <T>(data:T) => boolean = (data) => {
    if(data == Infinity) {
        return !!data;
    }
    // 判断Object类型
    if (typeof data === 'object' && data !== null) {
        const propsArr = Object.getOwnPropertyNames(data);
        return !propsArr.length
    }
    // 判断数组类型
    if (Array.isArray(data)) {
        return !data.length;
    }

    // 判断空格的字符串和转义符
    if(typeof data === 'string') {
        return /^\s*$/.test(data)
    }

    // 判断空Set和空Map
    if (data instanceof Set || data instanceof Map) {
        return data.size === 0
    }

    // 判断错误时间
    if (data instanceof Date) {
        return Number.isNaN(data.getTime());
    }
    return !data;
}

export default isBlanks;