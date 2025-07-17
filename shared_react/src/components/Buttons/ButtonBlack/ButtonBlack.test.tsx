import { render, screen } from "@testing-library/react";
import { ButtonBlack } from "./ButtonBlack";

describe("ButtonBlack", () => {
  it("renders with correct label", () => {
    render(<ButtonBlack></ButtonBlack>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});
