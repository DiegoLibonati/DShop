import { Fragment } from "react";
import { Link } from "react-router";

import type { JSX } from "react";

import Seo from "@container/components/Seo/Seo";

import "@container/components/NotFound/NotFound.css";

const NotFound = (): JSX.Element => {
  return (
    <Fragment>
      <Seo
        title="Page not found — DShop"
        description="This page does not exist on DShop."
        noindex={true}
      />

      <div className="not-found">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">This page does not exist</h1>
        <p className="not-found__message">
          The link you followed is broken or the page was removed.
        </p>

        <Link to="/" className="not-found__link">
          Back to the store
        </Link>
      </div>
    </Fragment>
  );
};

export default NotFound;
