/**
 *
 * @param data 判断真假判断所需的数据
 */
const isBlanks: <T>(data:T) => boolean = (data) => {
    if(data == Infinity) {
        return !!data;
    }
    return !data;
}

export default isBlanks;