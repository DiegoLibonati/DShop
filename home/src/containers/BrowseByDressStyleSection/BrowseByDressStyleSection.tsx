import React, { useEffect } from "react";

import { DressStyle } from "@src/entities/entities";

import { IllustrationWithTitle } from "@src/components/composed/Illustrations/IllustrationWithTitle/IllustrationWithTitle";

import { useDressStylesContext } from "@src/contexts/DressStyles/DressStylesContext";

import { lang } from "@src/constants/lang";

import "@src/containers/BrowseByDressStyleSection/BrowseByDressStyleSection.css";

export const BrowseByDressStyleSection = () => {
  const { dressStyles, handleSetDressStyles } = useDressStylesContext();

  const handleClickStyle = (type: DressStyle) => {
    console.log("Type: ", type);
  };

  const onInit = () => {
    const styles: DressStyle[] = ["casual", "formal", "party", "gym"];

    handleSetDressStyles(styles);
  };

  useEffect(onInit, []);

  return (
    <div className="browse-by-dress-style">
      <h2 className="browse-by-dress-style__title">
        {lang["en"].browseByDressStyle.title}
      </h2>

      <div className="browse-by-dress-style__styles">
        {dressStyles &&
          dressStyles.map((ds) => {
            return (
              <IllustrationWithTitle
                key={`style-${ds}`}
                type={ds}
                onClick={() => handleClickStyle(ds)}
              ></IllustrationWithTitle>
            );
          })}
      </div>
    </div>
  );
};
