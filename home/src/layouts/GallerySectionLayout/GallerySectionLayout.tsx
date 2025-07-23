import React from "react";

import { GallerySectionLayoutProps } from "@src/entities/props";

import ButtonWhite from "@src/components/Buttons/ButtonWhite/ButtonWhite";

import "@src/layouts/GallerySectionLayout/GallerySectionLayout.css";

export const GallerySectionLayout = ({
  title,
  btnText,
  children,
  onClick,
}: GallerySectionLayoutProps) => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-section__title">{title}</h2>

      {children}

      <ButtonWhite
        idRoot={`${btnText} - ${title}`}
        ariaLabel={`${btnText} - ${title}`}
        borderGray={true}
        rounded={true}
        onClick={onClick}
        className="gallery-section__btn"
      >
        {btnText}
      </ButtonWhite>
    </section>
  );
};
