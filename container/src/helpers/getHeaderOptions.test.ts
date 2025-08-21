import { getHeaderOptions } from "@src/helpers/getHeaderOptions";

// 👇 Mock de lang para distintos idiomas
jest.mock("@src/constants/lang", () => ({
  lang: {
    en: {
      header: {
        options: {
          home: "Home",
          about: "About",
          contact: "Contact",
        },
      },
    },
    es: {
      header: {
        options: {
          home: "Inicio",
          about: "Acerca de",
        },
      },
    },
  },
}));

describe("getHeaderOptions.ts", () => {
  describe("General Tests", () => {
    test("Maps options for 'en' locale", () => {
      const result = getHeaderOptions("en");

      expect(result).toEqual([
        { id: "home", name: "Home", isMenu: false, open: false },
        { id: "about", name: "About", isMenu: false, open: false },
        { id: "contact", name: "Contact", isMenu: false, open: false },
      ]);
    });

    test("Maps options for 'es' locale", () => {
      const result = getHeaderOptions("es" as "en");

      expect(result).toEqual([
        { id: "home", name: "Inicio", isMenu: false, open: false },
        { id: "about", name: "Acerca de", isMenu: false, open: false },
      ]);
    });

    test("All items have isMenu=false and open=false by default", () => {
      const result = getHeaderOptions("en");

      result.forEach((opt) => {
        expect(opt.isMenu).toBe(false);
        expect(opt.open).toBe(false);
      });
    });

    test("Preserves insertion order from lang object", () => {
      const result = getHeaderOptions("en");

      expect(result.map((o) => o.id)).toEqual(["home", "about", "contact"]);
    });
  });
});
