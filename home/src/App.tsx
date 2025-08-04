import React from "react";

import { PresentationSection } from "@src/containers/PresentationSection/PresentationSection";
import { BrandsSection } from "@src/containers/BrandsSection/BrandsSection";
import { NewArrivalsSection } from "@src/containers/NewArrivalsSection/NewArrivalsSection";
import { TopSellingSection } from "@src/containers/TopSellingSection/TopSellingSection";
import { BrowseByDressStyleSection } from "@src/containers/BrowseByDressStyleSection/BrowseByDressStyleSection";
import { OurHappyCustomersSection } from "@src/containers/OurHappyCustomersSection/OurHappyCustomersSection";

import "@src/App.css";

export const App = () => {
  return (
    <main className="main-home">
      <PresentationSection></PresentationSection>
      <BrandsSection></BrandsSection>
      <NewArrivalsSection></NewArrivalsSection>
      <hr className="hr-home hr-home-gallery"></hr>
      <TopSellingSection></TopSellingSection>
      <BrowseByDressStyleSection></BrowseByDressStyleSection>
      <OurHappyCustomersSection></OurHappyCustomersSection>
    </main>
  );
};
