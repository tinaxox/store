"use client";

export function useLocalStorage() {
  const getValue = (key: string) => {
    return localStorage.getItem(key);
  };

  const setValue = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  return { getValue, setValue };
}
