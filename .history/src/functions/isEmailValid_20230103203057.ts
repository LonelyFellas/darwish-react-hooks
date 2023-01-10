/**
 * 
 * @param address 
 * @returns 
 */
export const isEmailValid = (address: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);