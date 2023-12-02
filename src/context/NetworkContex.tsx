import { createContext, useState, useEffect, PropsWithChildren } from 'react';

export const NetworkContext = createContext({
  isOnline: true
});

export const NetworkProvider = ({ children }: PropsWithChildren) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleNetworkChange = (newStatus: boolean) => {
      setIsOnline(newStatus);
    };

    window.addEventListener('online', () => handleNetworkChange(true));
    window.addEventListener('offline', () => handleNetworkChange(false));

    return () => {
      window.removeEventListener('online', () => handleNetworkChange(true));
      window.removeEventListener('offline', () => handleNetworkChange(false));
    };
  }, []);

  return <NetworkContext.Provider value={{ isOnline }}>{children}</NetworkContext.Provider>;
};
