import { CURRENT_TOLERANCE, ONE_PHASE_VOLTAGE, THREE_PHASE_VOLTAGE } from '@/constants/tolerance';

export const getFinalCurrent = (loadCurrent: number, ...k: number[]) => {
  return loadCurrent * k.reduce((acc, cur) => acc * cur, 1) * CURRENT_TOLERANCE;
};

export const getLoadCurrentForSinglePhase = (power: number, phi: number = 0.8) => {
  return power / (ONE_PHASE_VOLTAGE * phi);
};

export const getLoadCurrentForThreePhase = (power: number, phi: number = 0.8) => {
  return power / (Math.sqrt(3) * THREE_PHASE_VOLTAGE * phi);
};
