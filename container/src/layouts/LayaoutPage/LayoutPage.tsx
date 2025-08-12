import React, {
  Fragment,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import { LayoutPageProps } from "@src/entities/props";
import {
  FooterSection as FooterSectionT,
  HeaderOption as HeaderOptionT,
} from "@src/entities/entities";

import { HeaderOption } from "@src/components/composed/Headers/HeaderOption/HeaderOption";
import { FooterSection } from "@src/components/composed/Footers/FooterSection/FooterSection";

import { getFooterLinks } from "@src/helpers/getFooterLinks";
import { getHeaderOptions } from "@src/helpers/getHeaderOptions";

import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  TITLE_APP,
  X_LINK,
} from "@src/constants/app";
import { lang } from "@src/constants/lang";

import { getIdsByLength } from "shared_core/SharedCore";

import "@src/layouts/LayaoutPage/LayoutPage.css";

const HeaderLazy = lazy(
  () => import("@src/components/core/Headers/Header/Header")
);
const FooterWithSubscribeNewsletterLazy = lazy(
  () =>
    import(
      "@src/components/core/Footers/FooterWithSubscribeNewsletter/FooterWithSubscribeNewsletter"
    )
);

const LayoutPage = ({ children }: LayoutPageProps) => {
  const [headerOptions, setHeaderOptions] = useState<HeaderOptionT[]>(() =>
    getHeaderOptions("en")
  );
  const [footerLinks, setFooterLinks] = useState<FooterSectionT[]>(() =>
    getFooterLinks("en")
  );

  const idsLayouts = useRef<string[]>(getIdsByLength(2));

  const handleClickCart = (e: MouseEvent) => {
    console.log("Click Cart ", e);
  };

  const handleClickMenu = (e: MouseEvent) => {
    console.log("Click Menu ", e);
  };

  const handleClickSearch = (e: MouseEvent) => {
    console.log("Click Search ", e);
  };

  const handleSubmitSearch = (e: Event, value: string) => {
    e.preventDefault();
    console.log("SubmitSearch ", e, value);
  };

  const handleSubmitSubscribeNewsletter = (value: string) => {
    console.log("Subscribe Newsletter ", value);
  };

  const handleClickHeaderOption = () => {
    console.log("Click header option");
  };

  const onLanguageChange = () => {
    const lng = "en";

    setHeaderOptions(getHeaderOptions(lng));
    setFooterLinks(getFooterLinks(lng));
  };

  useEffect(onLanguageChange, []);

  return (
    <Fragment>
      <Suspense fallback={<div>Cargando Header</div>}>
        <HeaderLazy
          idRoot={idsLayouts.current[0]}
          name={TITLE_APP}
          isFixed={true}
          onClickCart={handleClickCart}
          onClickMenu={handleClickMenu}
          onClickSearch={handleClickSearch}
          onSubmitSearch={handleSubmitSearch}
        >
          {headerOptions.map((ho) => {
            return (
              <HeaderOption
                key={`header-option-${ho.id}`}
                name={ho.name}
                isMenu={ho.isMenu!}
                open={ho.open!}
                onClick={handleClickHeaderOption}
              ></HeaderOption>
            );
          })}
        </HeaderLazy>
      </Suspense>

      {children}

      <Suspense fallback={<div>Cargando Footer</div>}>
        <FooterWithSubscribeNewsletterLazy
          idRoot={idsLayouts.current[1]}
          title={TITLE_APP}
          description={lang["en"].footer.description}
          instagram={INSTAGRAM_LINK}
          facebook={FACEBOOK_LINK}
          twitter={X_LINK}
          language={"en"}
          onSubmitSubscribe={handleSubmitSubscribeNewsletter}
        >
          {footerLinks.length > 0 &&
            footerLinks.map((fl) => {
              return (
                <FooterSection
                  key={`footer-link-${fl.id}`}
                  title={fl.title}
                  content={fl.content}
                ></FooterSection>
              );
            })}
        </FooterWithSubscribeNewsletterLazy>
      </Suspense>
    </Fragment>
  );
};

export default LayoutPage;
