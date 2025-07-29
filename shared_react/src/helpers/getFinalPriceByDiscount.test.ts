import { getFinalPriceByDiscount } from "@src/helpers/getFinalPriceByDiscount";

describe("getFinalPriceByDiscount.ts", () => {
  describe("General Tests.", () => {
    test("It must return the same amount you paid, as there is no discount.", () => {
      const price = 10;
      const discount = 0;

      const finalPrice = getFinalPriceByDiscount(price, discount);

      expect(finalPrice).toEqual(price);
    });

    test("It must return the discounted price.", () => {
      const price = 100;
      const discount = 20;

      const finalPrice = getFinalPriceByDiscount(price, discount);

      expect(finalPrice).toEqual(80);
    });
  });
});
