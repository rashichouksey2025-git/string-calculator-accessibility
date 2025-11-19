import { calculateSum } from './../src/Component/stringCalculator';

describe('calculateSum', () => {
  test('calculates sum of numbers separated by commas', () => {
    expect(calculateSum('1,2,3')).toBe(6);
  });

  test('calculates sum of numbers separated by spaces', () => {
    expect(calculateSum('4 5 6')).toBe(15);
  });

  test('calculates sum of numbers with mixed spaces and commas', () => {
    expect(calculateSum('1, 2 3,4')).toBe(10);
  });

  test('ignores invalid numbers and sums only valid numbers', () => {
    expect(calculateSum('1, two, 3')).toBe(4);
  });

  test('returns null if no valid numbers are provided', () => {
    expect(calculateSum('abc, def')).toBeNull();
    expect(calculateSum('')).toBeNull();
  });

  test('handles negative numbers', () => {
    expect(calculateSum('-1, -2, 3')).toBe(0);
  });

    test('handles floating point numbers', () => {
    expect(calculateSum('1.5, 2.5, 3')).toBe(7);
  });
});
