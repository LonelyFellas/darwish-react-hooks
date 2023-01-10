
const shuffleArray: <T>(arr:T[])=> T[] =
    (arr) => arr.sort(() => 0.5 - Math.random())
export default shuffleArray;
