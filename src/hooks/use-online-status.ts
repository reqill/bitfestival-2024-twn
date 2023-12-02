import { NetworkContext } from '@/context/NetworkContex';
import { useContext } from 'react';

export const useOnlineStatus = () => {
  const { isOnline } = useContext(NetworkContext);

  return isOnline;
};
