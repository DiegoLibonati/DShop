import { render, screen } from "@testing-library/react";

import { ImageWithBackgroundColorProps } from "@src/entities/props";

import { ImageWithBackgroundColor } from "@src/components/Images/ImageWithBackgroundColor/ImageWithBackgroundColor.tsx";

type RenderComponent = {
  props: ImageWithBackgroundColorProps;
  container: HTMLElement;
};

const renderComponent = (): RenderComponent => {
  const props: ImageWithBackgroundColorProps = {
    src: "pepe-test",
    alt: "pepe-test-alt",
    bgColor: "red",
    className: "test-class",
  };

  const { container } = render(
    <ImageWithBackgroundColor
      src={props.src}
      alt={props.alt}
      bgColor={props.bgColor}
      className={props.className}
    >
      {props.children}
    </ImageWithBackgroundColor>
  );

  return {
    props: props,
    container: container,
  };
};

describe("ImageWithBackgroundColor.tsx", () => {
  describe("General Tests.", () => {
    test("It should render the component.", () => {
      const { container } = renderComponent();

      const root = container.querySelector(
        ".image-with-background-color-wrapper"
      ) as HTMLDivElement;

      expect(root).toBeInTheDocument();
    });

    test("It must render the image.", () => {
      const { props } = renderComponent();

      const img = screen.getByAltText(props.alt);

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", props.src);
    });

    test("It must apply the background color.", () => {
      const { container, props } = renderComponent();

      const root = container.querySelector(
        ".image-with-background-color-wrapper"
      ) as HTMLDivElement;

      expect(root.style.backgroundColor).toEqual(props.bgColor);
    });
  });
});
