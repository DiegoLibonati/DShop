import React, { useEffect } from "react";

import { AppProps } from "@src/entities/props";

import { PresentationSection } from "@src/containers/PresentationSection/PresentationSection";
import { BrandsSection } from "@src/containers/BrandsSection/BrandsSection";
import { NewArrivalsSection } from "@src/containers/NewArrivalsSection/NewArrivalsSection";
import { TopSellingSection } from "@src/containers/TopSellingSection/TopSellingSection";
import { BrowseByDressStyleSection } from "@src/containers/BrowseByDressStyleSection/BrowseByDressStyleSection";
import { OurHappyCustomersSection } from "@src/containers/OurHappyCustomersSection/OurHappyCustomersSection";

import { useConfigContext } from "@src/contexts/Config/ConfigContext";

import "@src/App.css";

export const App = ({ callbacks }: AppProps) => {
  const { handleSetInitialConfig } = useConfigContext();

  const onInit = () => {
    handleSetInitialConfig({ callbacks: callbacks });
  };

  useEffect(() => {
    onInit();
  }, []);

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
