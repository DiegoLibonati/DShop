import React from "react";

import { ButtonBlack } from "@src/components/Buttons/ButtonBlack/ButtonBlack";
import { ItemClothes } from "@src/components/Items/ItemClothes/ItemClothes";
import { RateStars } from "@src/components/Ratings/RateStars/RateStars";
import { SliderSnapX } from "@src/components/Sliders/SliderSnapX/SliderSnapX";

import "@src/App.css";

export const App = () => {
  return (
    <div className="test-container">
      <h1 className="test-container__title">Component Showcase</h1>

      <div className="component">
        <h2 className="component__title">Button Black</h2>
        <ButtonBlack rounded={true} ariaLabel="Button black">
          Button Black
        </ButtonBlack>
      </div>

      <div className="component">
        <h2 className="component__title">Item Clothes</h2>
        <ItemClothes
          src="https://i0.wp.com/ropaandroll.com/wp-content/uploads/2024/07/RMC-fallen-staked-ropa-and-roll-1.png?fit=1536%2C1536&ssl=1"
          name="T-shirt with Tape Details"
          rate={4}
          price={120}
          discount={10}
        ></ItemClothes>
      </div>

      <div className="component">
        <h2 className="component__title">Rate Stars</h2>
        <RateStars
          max={5}
          value={4.5}
          outColor={"#FFFFFF"}
          inColor="#FFC633"
        ></RateStars>
      </div>

      <div className="component">
        <h2 className="component__title">Slider Snap X</h2>
        <SliderSnapX>
          {[...Array(15)].map((_, i) => {
            return (
              <ItemClothes
                key={`slider_snap_x_item_${i}`}
                src="https://i0.wp.com/ropaandroll.com/wp-content/uploads/2024/07/RMC-fallen-staked-ropa-and-roll-1.png?fit=1536%2C1536&ssl=1"
                name="T-shirt with Tape Details"
                rate={4}
                price={120}
                discount={10}
              ></ItemClothes>
            );
          })}
        </SliderSnapX>
      </div>

      {/* Podés agregar más componentes aquí */}
    </div>
  );
};
