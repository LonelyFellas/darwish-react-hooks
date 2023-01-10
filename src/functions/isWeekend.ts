/**
 * 
 * @param date 日期
 * @returns boolean
 */
const isWeekend: (date: Date) => boolean = (date) => [0, 6].includes(date.getDay());

export default isWeekend;