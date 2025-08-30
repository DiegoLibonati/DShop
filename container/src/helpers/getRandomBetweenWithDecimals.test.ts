import { getRandomBetweenWithDecimals } from "@src/helpers/getRandomBetweenWithDecimals";

describe("getRandomBetweenWithDecimals", () => {
  describe("when called with default decimals (1)", () => {
    test("should return a number between min and max", () => {
      const min = 1;
      const max = 5;

      for (let i = 0; i < 50; i++) {
        const result = getRandomBetweenWithDecimals(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
      }
    });

    test("should return a number with at most 1 decimal place", () => {
      const result = getRandomBetweenWithDecimals(1, 5);
      const decimals = result.toString().split(".")[1]?.length || 0;
      expect(decimals).toBeLessThanOrEqual(1);
    });
  });

  describe("when called with decimals = 2", () => {
    test("should return a number with at most 2 decimal places", () => {
      const result = getRandomBetweenWithDecimals(10, 20, 2);
      const decimals = result.toString().split(".")[1]?.length || 0;
      expect(decimals).toBeLessThanOrEqual(2);
    });
  });

  describe("edge cases", () => {
    test("should return the min value if min = max", () => {
      const result = getRandomBetweenWithDecimals(5, 5);
      expect(result).toBe(5);
    });

    test("should handle negative ranges correctly", () => {
      const result = getRandomBetweenWithDecimals(-5, -1);
      expect(result).toBeGreaterThanOrEqual(-5);
      expect(result).toBeLessThanOrEqual(-1);
    });
  });
});
