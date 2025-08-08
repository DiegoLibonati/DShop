import { render, screen } from "@testing-library/react";

import { IllustrationType } from "@src/entities/entities";
import { IllustrationWithTitleProps } from "@src/entities/props";

import { IllustrationWithTitle } from "@src/components/composed/Illustrations/IllustrationWithTitle/IllustrationWithTitle";

type RenderComponent = {
  props: IllustrationWithTitleProps & { onClick: jest.Mock };
  container: HTMLElement;
};

const renderComponent = (type: IllustrationType): RenderComponent => {
  const props: IllustrationWithTitleProps & { onClick: jest.Mock } = {
    className: "test-props",
    type: type,
    onClick: jest.fn(),
  };

  const { container } = render(
    <IllustrationWithTitle
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    ></IllustrationWithTitle>
  );

  return {
    props: props,
    container: container,
  };
};

describe("IllustrationWithTitle.tsx", () => {
  describe("General Tests.", () => {
    const type: IllustrationType = "casual";

    test("It must render the component.", () => {
      const { props } = renderComponent(type);

      const illustration = screen.getByRole("button", {
        name: `illustration ${props.type}`,
      }) as HTMLButtonElement;

      expect(illustration).toBeInTheDocument();
    });

    test("It must render the title of the illustration.", () => {
      const { props } = renderComponent(type);

      const title = screen.getByRole("heading", { name: props.type });

      expect(title).toBeInTheDocument();
    });
  });

  describe("Casual illustration.", () => {
    const type: IllustrationType = "casual";

    test("It must render the illustration of type Casual.", () => {
      const { props } = renderComponent(type);

      const illustration = screen.getByAltText(`${props.type} img`);

      expect(illustration).toBeInTheDocument();
    });
  });

  describe("Formal illustration.", () => {
    const type: IllustrationType = "formal";

    test("It must render the illustration of type Formal.", () => {
      const { props } = renderComponent(type);

      const illustration = screen.getByAltText(`${props.type} img`);

      expect(illustration).toBeInTheDocument();
    });
  });

  describe("Gym illustration.", () => {
    const type: IllustrationType = "gym";

    test("It must render the illustration of type Gym.", () => {
      const { props } = renderComponent(type);

      const illustration = screen.getByAltText(`${props.type} img`);

      expect(illustration).toBeInTheDocument();
    });
  });

  describe("Party illustration.", () => {
    const type: IllustrationType = "party";

    test("It must render the illustration of type Party.", () => {
      const { props } = renderComponent(type);

      const illustration = screen.getByAltText(`${props.type} img`);

      expect(illustration).toBeInTheDocument();
    });
  });
});
