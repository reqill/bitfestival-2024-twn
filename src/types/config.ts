// export type TOptionValue = {
//   exclude: string[]; // IDs of options that should be excluded
//   values: string[];
// };

// export type TOption = {
//   id: string;
//   name: string;
//   values: TOptionValue[];
// };

// export type TFactor = {
//   id: string; // factor name tbh
//   dependsOn: TDependsOn[];
// };

// export type TDependsOn = {
//   id: string;
//   valueIndex: number;
// };

// export type TQuestion = {
//   id: string;
//   name: string;
//   chooseOne?: boolean;
//   factor?: TFactor;
//   options: TOption[];
// };

// export type TQuestion = {
//   id: string;
//   name: string;
//   chooseOne?: boolean;
//   options: TOption[];
// };

// export type TOption = { // hidden option values
//   id: string;
//   name: string;
//   meta: TOptionMeta[];
// };

// export type TOptionMeta = { // hidden option metadata values
//   id: string;
//   value: string[];
// };

export type TQuestion = {
  name: string;
  paramName: string;
  // if number of selected meta is more than this number then we promt user to choose one, if 0 then we can have any number selected
  desiredOptionMetaValues: number;
  options: TOption[];
};

export type TOption = {
  name: string;
  meta: string[];
};

export type TSelected = { paramName: string; values: string[] }[];

export type FinalFunctionParam = {
  k: number[];
  current: number;

  cabelName: [string];
  circuit: [string, string];
  mountingMethod: [string];
};
