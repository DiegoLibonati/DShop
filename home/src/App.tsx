import React from "react";

import { PresentationSection } from "@src/containers/PresentationSection/PresentationSection";
import { BrandsSection } from "@src/containers/BrandsSection/BrandsSection";

import "@src/App.css";

export const App = () => {
  return (
    <main className="main-home">
      <PresentationSection></PresentationSection>
      <BrandsSection></BrandsSection>
    </main>
  );
};
