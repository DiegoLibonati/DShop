import React from "react";

import { ButtonBlack } from "@src/components/Buttons/ButtonBlack/ButtonBlack";

import "@src/App.css";

export const App = () => {
  return (
    <div className="test-container">
      <h1 className="test-container__title">Component Showcase</h1>

      <div className="component">
        <h2 className="component__title">Button Black</h2>
        <ButtonBlack rounded={true}>Button Black</ButtonBlack>
      </div>

      {/* Podés agregar más componentes aquí */}
    </div>
  );
};
