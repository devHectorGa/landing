import { useEffect, useState } from 'react';

const getStorageData = <data>(keyName: string, defaultValue: data): data => {
  const savedItem = localStorage.getItem(keyName);
  return savedItem ? JSON.parse(savedItem) : defaultValue;
};

export const useLocalStorage = <data>(keyName: string, initialValue: data) => {
  const [value, setValue] = useState<data>(() => getStorageData(keyName, initialValue));

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [keyName, value]);

  return [value, setValue];
};
