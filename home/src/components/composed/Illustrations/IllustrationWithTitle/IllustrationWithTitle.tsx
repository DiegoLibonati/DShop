import React from "react";

import { IllustrationWithTitleProps } from "@src/entities/props";

import Casual from "@src/assets/Casual.png";
import Formal from "@src/assets/Formal.png";
import Gym from "@src/assets/Gym.png";
import Party from "@src/assets/Party.png";

import "@src/components/composed/Illustrations/IllustrationWithTitle/IllustrationWithTitle.css";

export const IllustrationWithTitle = ({
  type,
  className,
  onClick,
}: IllustrationWithTitleProps) => {
  return (
    <button
      className={`illustration-with-title ${className}`}
      aria-label={`illustration ${type}`}
      onClick={onClick}
    >
      <h2 className="illustration-with-title__title">{type}</h2>

      {type === "casual" && (
        <img
          src={Casual}
          alt={`${type} img`}
          className="illustration-with-title__illustration illustration-with-title__illustration-casual"
        ></img>
      )}

      {type === "formal" && (
        <img
          src={Formal}
          alt={`${type} img`}
          className="illustration-with-title__illustration illustration-with-title__illustration-formal"
        ></img>
      )}

      {type === "gym" && (
        <img
          src={Gym}
          alt={`${type} img`}
          className="illustration-with-title__illustration illustration-with-title__illustration-gym"
        ></img>
      )}

      {type === "party" && (
        <img
          src={Party}
          alt={`${type} img`}
          className="illustration-with-title__illustration illustration-with-title__illustration-party"
        ></img>
      )}
    </button>
  );
};
