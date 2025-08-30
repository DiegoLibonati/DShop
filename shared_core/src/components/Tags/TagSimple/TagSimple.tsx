import React from "react";

import { TagSimpleProps } from "@src/entities/props";

import "@src/components/Tags/TagSimple/TagSimple.css";

export const TagSimple = ({
  className,
  children,
  html,
  onClick,
}: TagSimpleProps) => {
  return (
    <div
      className={`tag-simple ${onClick && "tag-simple--pointer"} ${className}`}
      onClick={onClick}
    >
      {html && (
        <h2
          className="tag-simple__text"
          dangerouslySetInnerHTML={{ __html: html }}
        ></h2>
      )}
      {children && <h2 className="tag-simple__text">{children}</h2>}
    </div>
  );
};
