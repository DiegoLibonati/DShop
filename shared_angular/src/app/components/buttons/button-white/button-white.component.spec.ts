import { render, screen } from "@testing-library/angular";
import user from "@testing-library/user-event";

import { ButtonWhiteProps } from "@src/app/entities/props";

import { ButtonWhiteComponent } from "@src/app/components/buttons/button-white/button-white.component";

type RenderComponent = {
  props: ButtonWhiteProps & {
    onClick: jest.Mock;
  };
  container: Element;
};

const renderComponent = async (
  rounded: boolean,
  borderGray: boolean
): Promise<RenderComponent> => {
  const props: ButtonWhiteProps & {
    onClick: jest.Mock;
  } = {
    ariaLabel: "Aria label",
    rounded: rounded,
    borderGray: borderGray,
    textContent: "Test",
    className: "test-class",
    onClick: jest.fn(),
  };

  const { container } = await render(ButtonWhiteComponent, {
    componentProperties: props,
  });

  return {
    props: props,
    container: container,
  };
};

describe("button-white.component.ts", () => {
  const rounded = false;
  const borderGray = false;

  describe("General Tests.", () => {
    test("It should render the button.", async () => {
      const { props } = await renderComponent(rounded, borderGray);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.type).toEqual("button");
      expect(button.classList.contains("button-white")).toEqual(true);
      expect(button.classList.contains(props.className!)).toEqual(true);
    });

    test("It must execute the onClick function when the button is clicked.", async () => {
      const { props } = await renderComponent(rounded, borderGray);

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

    test("It should render the button with rounded.", async () => {
      const { props } = await renderComponent(rounded, borderGray);

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

    test("It should render the button with border gray.", async () => {
      const { props } = await renderComponent(rounded, borderGray);

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

    test("It should render the button without rounded.", async () => {
      const { props } = await renderComponent(rounded, borderGray);

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

    test("It should render the button with border gray.", async () => {
      const { props } = await renderComponent(rounded, borderGray);

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

    test("It should render the button without border gray.", async () => {
      const { props } = await renderComponent(rounded, borderGray);

      const button = screen.getByRole("button", {
        name: props.ariaLabel,
      }) as HTMLButtonElement;

      expect(button).toBeInTheDocument();
      expect(button.classList.contains("button-white--border-gray")).toEqual(
        false
      );
    });
  });
});
