import React, { useEffect } from "react";

import { AppProps } from "@src/entities/props";

import { PresentationSection } from "@src/containers/PresentationSection/PresentationSection";
import { BrandsSection } from "@src/containers/BrandsSection/BrandsSection";
import { NewArrivalsSection } from "@src/containers/NewArrivalsSection/NewArrivalsSection";
import { TopSellingSection } from "@src/containers/TopSellingSection/TopSellingSection";
import { BrowseByDressStyleSection } from "@src/containers/BrowseByDressStyleSection/BrowseByDressStyleSection";
import { OurHappyCustomersSection } from "@src/containers/OurHappyCustomersSection/OurHappyCustomersSection";

import { useConfigContext } from "@src/contexts/Config/ConfigContext";
import { useBrandsContext } from "@src/contexts/Brands/BrandsContext";
import { useNewArrivalsContext } from "@src/contexts/NewArrivals/NewArrivalsContext";
import { useTopSellingsContext } from "@src/contexts/TopSellings/TopSellingsContext";
import { useHappyCustomersContext } from "@src/contexts/HappyCustomers/HappyCustomersContext";

import "@src/App.css";

export const App = ({ callbacks, content }: AppProps) => {
  const { handleSetInitialConfig } = useConfigContext();
  const { handleSetBrands } = useBrandsContext();
  const { handleSetNewArrivals } = useNewArrivalsContext();
  const { handleSetTopSellings } = useTopSellingsContext();
  const { handleSetReviews } = useHappyCustomersContext();

  const onInit = () => {
    handleSetInitialConfig({ callbacks: callbacks });
    handleSetBrands(content.brands);
    handleSetNewArrivals(content.newArrivals);
    handleSetTopSellings(content.topSellings);
    handleSetReviews(content.reviews);
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
