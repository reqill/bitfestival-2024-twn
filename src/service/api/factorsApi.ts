import { API_ENDPOINTS, API_FACTORS } from '@/constants/api';
import { ValueOf } from '@/types/common';
import { axios } from '../axios';
import { TFactors } from '@/types/factors';

const get = (factor: ValueOf<typeof API_FACTORS>) =>
  axios.get<void, TFactors>(`${API_ENDPOINTS.factors}/${factor}`);

export const factorsApi = { get } as const;
