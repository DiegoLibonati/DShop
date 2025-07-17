import React from "react";

import { ButtonBlack } from "@src/components/Buttons/ButtonBlack/ButtonBlack";

export const App = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Component Showcase</h1>
      <h2>Black Button</h2>
      <ButtonBlack rounded={true}>Button Black</ButtonBlack>

      {/* <h2>White Button</h2>
        <ButtonWhite label="Preview White Button" /> */}

      {/* Podés agregar más componentes aquí */}
    </div>
  );
};
