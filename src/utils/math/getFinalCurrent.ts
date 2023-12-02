import {
  CURRENT_TOLERANCE,
  DEFAULT_POWER_COEFFICIENT,
  ONE_PHASE_VOLTAGE,
  THREE_PHASE_VOLTAGE
} from '@/constants/tolerance';

export const getFinalCurrent = (loadCurrent: number, ...k: number[]) => {
  return loadCurrent * k.reduce((acc, cur) => acc * cur, 1) * CURRENT_TOLERANCE;
};

export const getLoadCurrentForSinglePhase = (power: number, phi = DEFAULT_POWER_COEFFICIENT) => {
  return power / (ONE_PHASE_VOLTAGE * phi);
};

export const getLoadCurrentForThreePhase = (power: number, phi = DEFAULT_POWER_COEFFICIENT) => {
  return power / (Math.sqrt(3) * THREE_PHASE_VOLTAGE * phi);
};
