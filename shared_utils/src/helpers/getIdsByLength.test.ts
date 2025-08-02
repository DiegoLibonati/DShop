import { getIdsByLength } from "@src/helpers/getIdsByLength";

describe("getIdsByLength.ts", () => {
  describe("General Tests.", () => {
    test("It should return 1 ids.", () => {
      const length = 1;

      const ids = getIdsByLength(length);

      expect(ids).toHaveLength(length);
    });

    test("It should return 0 ids.", () => {
      const length = 0;

      const ids = getIdsByLength(length);

      expect(ids).toHaveLength(length);
    });

    test("It should return 100 ids.", () => {
      const length = 100;

      const ids = getIdsByLength(length);

      expect(ids).toHaveLength(length);
    });
  });
});
