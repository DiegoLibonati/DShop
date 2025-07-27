import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { ButtonBlackProps } from "@src/entities/props";

import { ButtonBlack } from "@src/components/Buttons/ButtonBlack/ButtonBlack.tsx";

type RenderComponent = {
  props: ButtonBlackProps & {
    onClick: jest.Mock;
  };
  container: HTMLElement;
};

const renderComponent = (rounded: boolean): RenderComponent => {
  const props: ButtonBlackProps & {
    onClick: jest.Mock;
  } = {
    ariaLabel: "Aria label",
    rounded: rounded,
    children: "Test",
    className: "test-class",
    onClick: jest.fn(),
  };

  const { container } = render(
    <ButtonBlack
      ariaLabel={props.ariaLabel}
      className={props.className}
      onClick={props.onClick}
      rounded={props.rounded}
    >
      {props.children}
    </ButtonBlack>
  );

  return {
    props: props,
    container: container,
  };
};

describe("ButtonBlack.tsx", () => {
  const rounded = false;

  describe("General Tests.", () => {
    test("It should render the button.", () => {
      const { props } = renderComponent(rounded);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.type).toEqual("button");
      expect(button.classList.contains("button-black")).toEqual(true);
      expect(button.classList.contains(props.className!)).toEqual(true);
    });

    test("It must execute the onClick function when the button is clicked.", async () => {
      const { props } = renderComponent(rounded);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();

      await user.click(button);

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("With rounded.", () => {
    const rounded = true;

    test("It should render the button with rounded.", () => {
      const { props } = renderComponent(rounded);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.classList.contains("button-black--rounded")).toEqual(
        rounded
      );
    });
  });

  describe("Without rounded.", () => {
    const rounded = false;

    test("It should render the button without rounded.", () => {
      const { props } = renderComponent(rounded);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.classList.contains("button-black--rounded")).toEqual(
        rounded
      );
    });
  });
});
