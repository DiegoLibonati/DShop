import React from "react";

import { TagSimpleProps } from "@src/entities/props";

import "@src/components/Tags/TagSimple/TagSimple.css";

export const TagSimple = ({ className, children, onClick }: TagSimpleProps) => {
  return (
    <div
      className={`tag-simple ${onClick && "tag-simple--pointer"} ${className}`}
      onClick={onClick}
    >
      <h2 className="tag-simple__text">{children}</h2>
    </div>
  );
};
