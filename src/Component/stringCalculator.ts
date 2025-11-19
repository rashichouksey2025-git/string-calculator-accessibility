export const calculateSum = (input: string): number | null => {
  const numbers = input
    .split(/[\s,]+/)
    .map((n) => parseFloat(n))
    .filter((n) => !isNaN(n));

  if (numbers.length === 0) return null; 

  return numbers.reduce((acc, curr) => acc + curr, 0);
};
