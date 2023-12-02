import { useState, useEffect } from 'react';
import { useLocalStorage } from './use-local-storage';
import { useOnlineStatus } from './use-online-status';

const STALE_TIME = import.meta.env.DEV ? 1000 * 5 : 1000 * 60 * 60 * 1; // 1 hour

const checkIfStale = (lastUpdatedString: string, staleTime = STALE_TIME) => {
  const lastUpdated = new Date(lastUpdatedString);
  return new Date().getTime() - lastUpdated.getTime() > staleTime;
};

type DateExpandedType<TData> = {
  data: TData;
  lastUpdated: string;
};

type ApiWithGetMethod<TKey, TData> = {
  get: (key: TKey) => Promise<TData>;
};

export const useCachedValue = <TKey extends string, TData>(
  api: ApiWithGetMethod<TKey, TData>,
  key: TKey
) => {
  const [storedValue, setStoredValue] = useLocalStorage<DateExpandedType<TData> | null>(key, null);
  const [data, setData] = useState<TData | null>(storedValue?.data || null);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await api.get(key);
      setData(apiData);
      setStoredValue({ data: apiData, lastUpdated: new Date().toISOString() });
    };

    if (isOnline) {
      if (!storedValue || !storedValue.lastUpdated || checkIfStale(storedValue.lastUpdated)) {
        fetchData();
      }
    }
  }, [key, isOnline, storedValue, setStoredValue, api]);

  return data;
};
