import { FooterSection, FooterSectionId } from "@src/entities/entities";

export type LangC = {
  en: {
    header: LangHeader;
    footer: LangFooter;
  };
};

export type LangHeader = {
  options: {
    shop: string;
    onSale: string;
    newArrivals: string;
    brands: string;
  };
};

export type LangFooter = {
  description: string;
  sections: Record<FooterSectionId, LangFooterSection>;
};
export type LangFooterSection = {
  title: string;
  items: Record<string, string>;
};
