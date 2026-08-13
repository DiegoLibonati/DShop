import type { FooterSectionId } from "@container/types/app";

import { getFooterLinks } from "@container/helpers/getFooterLinks";

import { lang } from "@container/constants/lang";

describe("getFooterLinks", () => {
  it("should return one section per configured footer entry", () => {
    const sections = getFooterLinks("en");

    expect(sections).toHaveLength(Object.keys(lang.en.footer.sections).length);
  });

  it("should map each section id and title from the language config", () => {
    const sections = getFooterLinks("en");

    const expectedIds: FooterSectionId[] = ["company", "help", "faq", "resources"];

    expect(sections.map((section) => section.id)).toEqual(expectedIds);
    expect(sections.map((section) => section.title)).toEqual([
      lang.en.footer.sections.company.title,
      lang.en.footer.sections.help.title,
      lang.en.footer.sections.faq.title,
      lang.en.footer.sections.resources.title,
    ]);
  });

  it("should map each content title from the language config", () => {
    const sections = getFooterLinks("en");

    const company = sections.find((section) => section.id === "company");

    expect(company?.content).toEqual([
      { title: lang.en.footer.sections.company.items.whoWeAre },
      { title: lang.en.footer.sections.company.items.ourTeam },
      { title: lang.en.footer.sections.company.items.careers },
      { title: lang.en.footer.sections.company.items.newsroom },
    ]);
  });

  it("should not expose a destination for any content item", () => {
    const items = getFooterLinks("en").flatMap((section) => section.content);

    expect(items.length).toBeGreaterThan(0);
    items.forEach((item) => {
      expect(item).toEqual({ title: expect.any(String) });
    });
  });
});
