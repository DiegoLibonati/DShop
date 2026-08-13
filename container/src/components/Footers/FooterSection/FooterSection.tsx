import type { JSX } from "react";
import type { FooterSectionProps } from "@container/types/props";

import "@container/components/Footers/FooterSection/FooterSection.css";

const FooterSection = ({ title, content }: FooterSectionProps): JSX.Element => {
  return (
    <div className="footer-section">
      <h2 className="footer-section__title">{title}</h2>

      {content.map((c) => (
        <p key={`footer-link-content-item-${c.title}`} className="footer-section__item">
          {c.title}
        </p>
      ))}
    </div>
  );
};

export default FooterSection;
