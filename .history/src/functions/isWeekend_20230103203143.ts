/**
 * 
 * @param date 
 * @returns 
 */
const isWeekend: (date: Date) => boolean = (date) => [0, 6].includes(date.getDay());

export default isWeekend;