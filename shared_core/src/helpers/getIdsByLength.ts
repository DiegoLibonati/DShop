export const getIdsByLength = (length: number): string[] => {
  return Array.from({ length: length }, () => crypto.randomUUID());
};
