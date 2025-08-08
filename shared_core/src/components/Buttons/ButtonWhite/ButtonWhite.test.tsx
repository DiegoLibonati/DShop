import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { ButtonWhiteProps } from "@src/entities/props";

import { ButtonWhite } from "@src/components/Buttons/ButtonWhite/ButtonWhite";

type RenderComponent = {
  props: ButtonWhiteProps & {
    onClick: jest.Mock;
  };
  container: Element;
};

const renderComponent = (
  rounded: boolean,
  borderGray: boolean,
  type?: "button" | "reset" | "submit"
): RenderComponent => {
  const props: ButtonWhiteProps & {
    onClick: jest.Mock;
  } = {
    ariaLabel: "Aria label",
    rounded: rounded,
    borderGray: borderGray,
    children: "Test",
    className: "test-class",
    type: type ?? "button",
    onClick: jest.fn(),
  };

  const { container } = render(
    <ButtonWhite
      ariaLabel={props.ariaLabel}
      borderGray={props.borderGray}
      className={props.className}
      onClick={props.onClick}
      type={props.type}
      rounded={props.rounded}
    >
      {props.children}
    </ButtonWhite>
  );

  return {
    props: props,
    container: container,
  };
};

describe("ButtonWhite.tsx", () => {
  const rounded = false;
  const borderGray = false;

  describe("General Tests.", () => {
    test("It should render the button.", () => {
      const { props } = renderComponent(rounded, borderGray);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.type).toEqual("button");
      expect(button.classList.contains("button-white")).toEqual(true);
      expect(button.classList.contains(props.className!)).toEqual(true);
    });

    test("It must execute the onClick function when the button is clicked.", async () => {
      const { props } = renderComponent(rounded, borderGray);

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
    const borderGray = false;

    test("It should render the button with rounded.", () => {
      const { props } = renderComponent(rounded, borderGray);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.classList.contains("button-white--rounded")).toEqual(
        rounded
      );
    });
  });

  describe("With borderGray.", () => {
    const rounded = false;
    const borderGray = true;

    test("It should render the button with border gray.", () => {
      const { props } = renderComponent(rounded, borderGray);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.classList.contains("button-white--border-gray")).toEqual(
        borderGray
      );
    });
  });

  describe("Without rounded.", () => {
    const rounded = false;
    const borderGray = false;

    test("It should render the button without rounded.", () => {
      const { props } = renderComponent(rounded, borderGray);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.classList.contains("button-white--rounded")).toEqual(false);
    });
  });

  describe("With borderGray.", () => {
    const rounded = false;
    const borderGray = true;

    test("It should render the button with border gray.", () => {
      const { props } = renderComponent(rounded, borderGray);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.classList.contains("button-white--border-gray")).toEqual(
        borderGray
      );
    });
  });

  describe("Without borderGray.", () => {
    const rounded = false;
    const borderGray = false;

    test("It should render the button without border gray.", () => {
      const { props } = renderComponent(rounded, borderGray);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.classList.contains("button-white--border-gray")).toEqual(
        false
      );
    });
  });

  describe("With a specific type.", () => {
    const rounded = false;
    const borderGray = false;
    const type = "submit";

    test("It must render the button with the dynamic type.", () => {
      const { props } = renderComponent(rounded, borderGray, type);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toHaveAttribute("type", type);
    });
  });
});
