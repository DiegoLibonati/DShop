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

const NotificationBarLazy = lazy(
  () =>
    import("@src/components/core/Notifications/NotificationBar/NotificationBar")
);
const HeaderLazy = lazy(
  () => import("@src/components/core/Headers/Header/Header")
);
const MenuHeaderLazy = lazy(
  () => import("@src/components/composed/Menus/MenuHeader/MenuHeader")
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [notificationClosed, setNotificationClosed] = useState<boolean>(false);

  const idsLayouts = useRef<string[]>(getIdsByLength(3));

  const handleClickMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleClickCart = (e: MouseEvent) => {
    console.log("Click Cart ", e);
  };

  const handleClickMenu = (e: MouseEvent) => {
    setIsMenuOpen(true);
  };

  const handleClickSearch = (e: MouseEvent) => {
    setIsMenuOpen(true);
  };

  const handleSubmitSearch = (value: string) => {
    console.log(value);
  };

  const handleSubmitSubscribeNewsletter = (value: string) => {
    console.log("Subscribe Newsletter ", value);
  };

  const handleClickHeaderOption = () => {
    console.log("Click header option");
  };

  const handleClickCloseNotification = () => {
    setNotificationClosed(true);
  };

  const onLanguageChange = () => {
    const lng = "en";

    setHeaderOptions(getHeaderOptions(lng));
    setFooterLinks(getFooterLinks(lng));
  };

  const onWindowScroll = () => {
    const scrollY = window.scrollY;

    if (!scrollY) return setScrolled(false);
    return setScrolled(true);
  };

  useEffect(onLanguageChange, []);
  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return (
    <Fragment>
      <Suspense fallback={<div>Cargando Notification Bar</div>}>
        <NotificationBarLazy
          idRoot={idsLayouts.current[0]}
          onClose={handleClickCloseNotification}
          className={`${(scrolled || notificationClosed) && "notification-bar--hidden"}`}
        >
          {lang["en"].notifications.bar}
        </NotificationBarLazy>
      </Suspense>

      <Suspense fallback={<div>Cargando Header</div>}>
        <HeaderLazy
          idRoot={idsLayouts.current[1]}
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

      <Suspense fallback={<div>Cargando menu header</div>}>
        <MenuHeaderLazy
          isMenuOpen={isMenuOpen}
          language="en"
          handleClickMenuClose={handleClickMenuClose}
        >
          <div className="menu-header__options">
            {headerOptions.map((ho) => {
              return (
                <HeaderOption
                  key={`menu-header-option-${ho.id}`}
                  name={ho.name}
                  isMenu={ho.isMenu!}
                  open={ho.open!}
                  onClick={handleClickHeaderOption}
                  className="menu-header__option"
                ></HeaderOption>
              );
            })}
          </div>
        </MenuHeaderLazy>
      </Suspense>

      {children}

      <Suspense fallback={<div>Cargando Footer</div>}>
        <FooterWithSubscribeNewsletterLazy
          idRoot={idsLayouts.current[2]}
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
