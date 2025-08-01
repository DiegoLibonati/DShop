import React, { useRef } from "react";

import { ButtonBlack } from "@src/components/Buttons/ButtonBlack/ButtonBlack";
import { SvgSkyStar } from "@src/components/Svgs/SvgSkyStar/SvgSkyStar";

import { lang } from "@src/constants/lang";

import PresentationMobile from "@src/assets/presentation-mobile.png";
import PresentationDesktop from "@src/assets/presentation-desktop.png";

import { getIdsByLength } from "shared_utils/SharedUtils";

import "@src/containers/PresentationSection/PresentationSection.css";

export const PresentationSection = () => {
  const idsPresentation = useRef<string[]>(getIdsByLength(5));

  return (
    <section className="presentation">
      <article className="presentation-information">
        <h2 className="presentation-information__title">
          {lang["en"].presentation.title}
        </h2>
        <p className="presentation-information__description">
          {lang["en"].presentation.description}
        </p>
        <ButtonBlack
          idRoot={idsPresentation.current[0]}
          className="presentation-information__shop-now"
          rounded={true}
        >
          {lang["en"].presentation.button_shop_now}
        </ButtonBlack>

        <div className="presentation-information__counts">
          <div className="presentation-information__counts-single">
            <p className="presentation-information__counts-single-count">
              200+
            </p>
            <p className="presentation-information__counts-single-title">
              {lang["en"].presentation.international_brands}
            </p>
          </div>

          <div className="presentation-information__counts-single">
            <p className="presentation-information__counts-single-count">
              2,000+
            </p>
            <p className="presentation-information__counts-single-title">
              {lang["en"].presentation.high_quality_products}
            </p>
          </div>

          <div className="presentation-information__counts-single">
            <p className="presentation-information__counts-single-count">
              30,000+
            </p>
            <p className="presentation-information__counts-single-title">
              {lang["en"].presentation.happy_customers}
            </p>
          </div>
        </div>
      </article>

      <article className="presentation-illustration presentation-illustration--mobile">
        <img
          src={PresentationMobile}
          alt={"presentation-mobile-img"}
          className="presentation-illustration__img"
        ></img>

        <div className="presentation-illustration__vectors">
          <SvgSkyStar
            idRoot={idsPresentation.current[1]}
            width={44}
            height={44}
            className="presentation-illustration__vector presentation-illustration__vector--1"
            wrapperClass="presentation-illustration__vector-wrapper"
          ></SvgSkyStar>
          <SvgSkyStar
            idRoot={idsPresentation.current[2]}
            width={76}
            height={76}
            className="presentation-illustration__vector presentation-illustration__vector--2"
            wrapperClass="presentation-illustration__vector-wrapper"
          ></SvgSkyStar>
        </div>
      </article>

      <article className="presentation-illustration presentation-illustration--desktop">
        <img
          src={PresentationDesktop}
          alt={"presentation-mobile-img"}
          className="presentation-illustration__img"
        ></img>

        <div className="presentation-illustration__vectors">
          <SvgSkyStar
            idRoot={idsPresentation.current[3]}
            width={44}
            height={44}
            className="presentation-illustration__vector presentation-illustration__vector--1"
            wrapperClass="presentation-illustration__vector-wrapper"
          ></SvgSkyStar>
          <SvgSkyStar
            idRoot={idsPresentation.current[4]}
            width={76}
            height={76}
            className="presentation-illustration__vector presentation-illustration__vector--2"
            wrapperClass="presentation-illustration__vector-wrapper"
          ></SvgSkyStar>
        </div>
      </article>
    </section>
  );
};
