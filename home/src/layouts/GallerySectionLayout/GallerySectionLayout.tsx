import React, { useRef } from "react";

import { GallerySectionLayoutProps } from "@src/entities/props";

import ButtonWhite from "@src/components/Buttons/ButtonWhite/ButtonWhite";

import { getIdsByLength } from "shared_utils/SharedUtils";

import "@src/layouts/GallerySectionLayout/GallerySectionLayout.css";

export const GallerySectionLayout = ({
  title,
  btnText,
  children,
  onClick,
}: GallerySectionLayoutProps) => {
  const idsGallerySection = useRef<string[]>(getIdsByLength(1));

  return (
    <section className="gallery-section">
      <h2 className="gallery-section__title">{title}</h2>

      {children}

      <ButtonWhite
        idRoot={idsGallerySection.current[0]}
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
