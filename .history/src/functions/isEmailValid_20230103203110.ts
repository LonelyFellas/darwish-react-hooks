/**
 * 
 * @param address URL地址
 * @returns 
 */
export const isEmailValid = (address: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);