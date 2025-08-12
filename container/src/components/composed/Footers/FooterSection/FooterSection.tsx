import React from "react";

import { FooterSectionProps } from "@src/entities/props";

import "@src/components/composed/Footers/FooterSection/FooterSection.css";

export const FooterSection = ({ title, content }: FooterSectionProps) => {
  return (
    <div className="footer-section">
      <h2 className="footer-section__title">{title}</h2>

      {content.map((c) => {
        return (
          <a
            key={`footer-link-content-anchor-${c.title}`}
            href={c.link}
            aria-label={`link-${c.title}`}
            className="footer-section__link"
          >
            {c.title}
          </a>
        );
      })}
    </div>
  );
};
