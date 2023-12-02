import { useState, useEffect } from 'react';
import { useLocalStorage } from './use-local-storage';
import { useOnlineStatus } from './use-online-status';

const STALE_TIME = 1000 * 60 * 60 * 1; // 1 hour

const checkIfStale = (lastUpdated: Date, staleTime = STALE_TIME) => {
  return new Date().getTime() - lastUpdated.getTime() > staleTime;
};

type UseCachedValueApi<TData> = {
  get: () => Promise<TData>;
};

type DateExpandedType<TData> = {
  data: TData;
  lastUpdated: Date;
};

export const useCachedValue = <TData>(key: string, api: UseCachedValueApi<TData>) => {
  const [storedValue, setStoredValue] = useLocalStorage<DateExpandedType<TData> | null>(key, null);
  const [data, setData] = useState<TData | null>(storedValue?.data || null);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await api.get();
      setData(apiData);
      setStoredValue({ data: apiData, lastUpdated: new Date() });
    };

    if (isOnline) {
      if (!storedValue || checkIfStale(storedValue.lastUpdated)) {
        fetchData();
      }
    }
  }, [isOnline, storedValue, setStoredValue, api]);

  return data;
};
