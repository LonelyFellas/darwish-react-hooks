/**
 * 
 * @param address URL地址
 * @returns boolean
 */
export const isEmailValid = (address: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);