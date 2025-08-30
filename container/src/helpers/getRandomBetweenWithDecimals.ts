export const getRandomBetweenWithDecimals = (
  min: number,
  max: number,
  decimals: number = 1
): number => {
  const num = Math.random() * (max - min) + min;
  return parseFloat(num.toFixed(decimals));
};
