import React, { useEffect, useState } from "react";

import { IllustrationType } from "@src/entities/entities";

import { IllustrationWithTitle } from "@src/components/Illustrations/IllustrationWithTitle/IllustrationWithTitle";

import { lang } from "@src/constants/lang";

import "@src/containers/BrowseByDressStyleSection/BrowseByDressStyleSection.css";

export const BrowseByDressStyleSection = () => {
  const [styles, setStyles] = useState<IllustrationType[]>([]);

  const handleClickStyle = (type: IllustrationType) => {
    console.log("Type: ", type);
  };

  const onInit = () => {
    const styles: IllustrationType[] = ["casual", "formal", "party", "gym"];

    setStyles(styles);
  };

  useEffect(onInit, []);

  return (
    <div className="browse-by-dress-style">
      <h2 className="browse-by-dress-style__title">
        {lang["en"].browseByDressStyle.title}
      </h2>

      <div className="browse-by-dress-style__styles">
        {styles.map((style) => {
          return (
            <IllustrationWithTitle
              key={`style-${style}`}
              type={style}
              onClick={() => handleClickStyle(style)}
            ></IllustrationWithTitle>
          );
        })}
      </div>
    </div>
  );
};
