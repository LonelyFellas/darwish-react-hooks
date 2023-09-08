import { useState } from 'react';
import jsCookie from 'js-cookie';
export default function useCookie(cookieName: string) {
  const [cookieValue, setCookieValue] = useState(
    () => jsCookie.get(cookieName) || null
  );
  const updateCookie = (value: string, option?: jsCookie.CookieAttributes) => {
    jsCookie.set(cookieName, value, option);
    setCookieValue(value);
  };

  const deleteCookie = (option?: jsCookie.CookieAttributes) => {
    jsCookie.remove(cookieName, option);
    setCookieValue(null);
  };

  return [cookieValue, updateCookie, deleteCookie] as const;
}
