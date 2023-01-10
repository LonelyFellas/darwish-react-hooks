/**
 *
 * @param data 实现一个深拷贝。
 */
const cloneDeep: <T>(data: T) => T | { [k: string]: T; } = (data) => {
    if (Array.isArray(data)) {
        return data.map((child) => cloneDeep(child))
    }
    if (typeof data === 'object' && data !== null) {
        return Object.fromEntries(Object.entries(data).map(([k, v]) => [k, cloneDeep(v)]))
    }
    return data
}

export default cloneDeep;
