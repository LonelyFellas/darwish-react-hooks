/**
 * 
 * @param arr 数组
 * @returns 返回一个乱序的数组
 */
const shuffleArray: <T>(arr:T[])=> T[] =
    (arr) => arr.sort(() => 0.5 - Math.random())
export default shuffleArray;
