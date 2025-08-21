import { getFooterLinks } from "@src/helpers/getFooterLinks";

jest.mock("@src/constants/lang", () => ({
  lang: {
    en: {
      footer: {
        sections: {
          about: {
            title: "About",
            items: {
              team: "Team",
              careers: "Careers",
            },
          },
          help: {
            title: "Help",
            items: {
              support: "Support",
              missing: "Missing link",
            },
          },
          legal: {
            title: "Legal",
            items: {},
          },
        },
      },
    },
    es: {
      footer: {
        sections: {
          about: {
            title: "Acerca de",

            items: {
              team: "Equipo",
              careers: "Carreras",
            },
          },
        },
      },
    },
  },
}));

jest.mock("@src/constants/components", () => ({
  FOOTER_LINKS: {
    about: {
      team: "/team",
      careers: "/careers",
    },
    help: {
      support: "/support",
    },
    legal: {},
  },
}));

describe("getFooterLinks.ts", () => {
  describe("General Tests.", () => {
    test("Maps sections and items for 'en' locale", () => {
      const result = getFooterLinks("en");

      expect(result).toEqual([
        {
          id: "about",
          title: "About",
          content: [
            { title: "Team", link: "/team" },
            { title: "Careers", link: "/careers" },
          ],
        },
        {
          id: "help",
          title: "Help",
          content: [
            { title: "Support", link: "/support" },
            // item sin link debe mapear link: undefined
            { title: "Missing link", link: undefined },
          ],
        },
        {
          id: "legal",
          title: "Legal",
          content: [],
        },
      ]);
    });

    test("Uses provided locale content (es)", () => {
      const result = getFooterLinks("es" as "en");

      expect(result).toEqual([
        {
          id: "about",
          title: "Acerca de",
          content: [
            { title: "Equipo", link: "/team" },
            { title: "Carreras", link: "/careers" },
          ],
        },
      ]);
    });
  });
});
