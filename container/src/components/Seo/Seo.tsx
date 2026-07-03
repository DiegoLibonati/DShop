import { Fragment } from "react";

import type { JSX } from "react";
import type { SeoProps } from "@container/types/props";

import { SITE_URL } from "@container/constants/vars";

const Seo = ({ title, description, path, jsonLd }: SeoProps): JSX.Element => {
  const canonical = `${SITE_URL}${path}`;

  return (
    <Fragment>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      ) : null}
    </Fragment>
  );
};

export default Seo;
