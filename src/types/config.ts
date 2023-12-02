export type TOptionValue = {
  exclude: string[]; // IDs of options that should be excluded
  values: string[];
};

export type TOption = {
  id: string;
  name: string;
  values: TOptionValue[];
};

export type TQuestion = {
  id: string;
  name: string;
  chooseOne?: boolean;
  factor?: TFactor;
  options: TOption[];
};

export type TFactor = {
  id: string; // factor name tbh
  dependsOn: TDependsOn[];
};

export type TDependsOn = {
  id: string;
  valueIndex: number;
};
