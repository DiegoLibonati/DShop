import React from "react";

import { SvgStarToFill } from "@src/components/Svgs/SvgStarToFill/SvgStarToFill";
import { SvgChevronDown } from "@src/components/Svgs/SvgChevronDown/SvgChevronDown";
import { SvgChevronUp } from "@src/components/Svgs/SvgChevronUp/SvgChevronUp";
import { SvgHamburgerMenu } from "@src/components/Svgs/SvgHamburgerMenu/SvgHamburgerMenu";
import { SvgCartShopping } from "@src/components/Svgs/SvgCartShopping/SvgCartShopping";
import { SvgSearch } from "@src/components/Svgs/SvgSearch/SvgSearch";
import { SvgSkyStar } from "@src/components/Svgs/SvgSkyStar/SvgSkyStar";
import { SvgArrowLeft } from "@src/components/Svgs/SvgArrowLeft/SvgArrowLeft";
import { SvgArrowRight } from "@src/components/Svgs/SvgArrowRight/SvgArrowRight";

import "@src/App.css";

export const App = () => {
  return (
    <div className="test-container">
      <h1 className="test-container__title">Svgs Showcase</h1>

      <div className="component">
        <h2 className="component__title">SvgStarToFill</h2>
        <SvgStarToFill
          fill={75}
          inColor="#09feee"
          outColor="#ffffff"
        ></SvgStarToFill>
      </div>

      <div className="component">
        <h2 className="component__title">SvgChevronDown</h2>
        <SvgChevronDown></SvgChevronDown>
      </div>

      <div className="component">
        <h2 className="component__title">SvgChevronUp</h2>
        <SvgChevronUp></SvgChevronUp>
      </div>

      <div className="component">
        <h2 className="component__title">SvgHamburgerMenu</h2>
        <SvgHamburgerMenu></SvgHamburgerMenu>
      </div>

      <div className="component">
        <h2 className="component__title">SvgCartShopping</h2>
        <SvgCartShopping></SvgCartShopping>
      </div>

      <div className="component">
        <h2 className="component__title">SvgSearch</h2>
        <SvgSearch></SvgSearch>
      </div>

      <div className="component">
        <h2 className="component__title">SvgSkyStar</h2>
        <SvgSkyStar></SvgSkyStar>
      </div>

      <div className="component">
        <h2 className="component__title">SvgArrowLeft</h2>
        <SvgArrowLeft></SvgArrowLeft>
      </div>

      <div className="component">
        <h2 className="component__title">SvgArrowLeft</h2>
        <SvgArrowRight></SvgArrowRight>
      </div>

      {/* Podés agregar más componentes aquí */}
    </div>
  );
};
