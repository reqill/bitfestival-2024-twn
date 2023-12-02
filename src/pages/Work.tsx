import { API_FACTORS } from '@/constants/api';
import { useCachedValue } from '@/hooks/use-cached-value';
import { factorsApi } from '@/service/api/factorsApi';

export const Work = () => {
  const data = useCachedValue(factorsApi, API_FACTORS.AIR_TEMPERATURE);

  return <code style={{ whiteSpace: 'pre' }}>{JSON.stringify(data, null, 2)}</code>;
};
