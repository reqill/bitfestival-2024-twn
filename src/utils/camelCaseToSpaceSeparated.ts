export const camelCaseToSpaceSeparated = (camelCase: string) => {
  return camelCase.replace(/([A-Z])/g, ' $1').toLowerCase();
};
