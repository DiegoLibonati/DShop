import React from "react";

import { ItemClothes } from "@src/components/composed/Items/ItemClothes/ItemClothes";
import { SubscribeNewsletter } from "@src/components/composed/Subscribes/SubscribeNewsletter/SubscribeNewsletter";
import { FooterWithSubscribeNewsletter } from "@src/components/composed/Footers/FooterWithSubscribeNewsletter/FooterWithSubscribeNewsletter";
import { LoaderScreen } from "@src/components/composed/Loaders/LoaderScreen/LoaderScreen";
import { GalleryClothes } from "@src/components/composed/Galleries/GalleryClothes/GalleryClothes";

import { CLOTHES_1 } from "@src/constants/clothes";

import "@src/App.css";

export const App = () => {
  return (
    <div className="test-container">
      <h1 className="test-container__title">Component Showcase</h1>

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
        <h2 className="component__title">Footer With Subscribe Newsletter</h2>
        <FooterWithSubscribeNewsletter
          className="footer-with-subscribe-newsletter-showcase"
          title="DShop"
          description="We have clothes that suits your style and which you’re proud to wear. From women to men."
          instagram={"https://www.instagram.com"}
          facebook={"https://www.facebook.com"}
          twitter={"https://www.x.com"}
          onSubmitSubscribe={(inputValue) => {
            console.log(inputValue);
          }}
        >
          <div>Links 1</div>
          <div>Links 2</div>
          <div>Links 3</div>
          <div>Links 4</div>
        </FooterWithSubscribeNewsletter>
      </div>

      <div className="component">
        <h2 className="component__title">Subscribe Newsletter</h2>
        <SubscribeNewsletter
          title="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
          submitLabel="Subscribe to Newsletter"
          onSubmit={(inputValue) => {
            console.log(inputValue);
          }}
        ></SubscribeNewsletter>
      </div>

      <div className="component">
        <h2 className="component__title">Loader Screen</h2>
        <LoaderScreen className="loader-screen-app-test"></LoaderScreen>
      </div>

      <div className="component">
        <h2 className="component__title">Gallery Clothes</h2>
        <GalleryClothes
          title="YOU MIGHT ALSO LIKE"
          clothes={CLOTHES_1}
          onClothesClick={(c) => {
            console.log(c);
          }}
        ></GalleryClothes>
      </div>

      {/* Podés agregar más componentes aquí */}
    </div>
  );
};
