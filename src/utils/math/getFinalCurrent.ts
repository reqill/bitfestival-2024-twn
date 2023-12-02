import { CURRENT_TOLERANCE } from '@/constants/tolerance';

export const getFinalCurrent = (loadCurrent: number, ...k: number[]) => {
  return loadCurrent * k.reduce((acc, cur) => acc * cur, 1) * CURRENT_TOLERANCE;
};
