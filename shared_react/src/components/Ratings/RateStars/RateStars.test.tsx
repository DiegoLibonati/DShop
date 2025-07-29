import { render } from "@testing-library/react";

import { RateStarsProps } from "@src/entities/props";

import { RateStars } from "@src/components/Ratings/RateStars/RateStars.tsx";

type RenderComponent = {
  props: RateStarsProps;
  container: HTMLElement;
};

const renderComponent = (): RenderComponent => {
  const props: RateStarsProps = {
    max: 5,
    value: 2,
    outColor: "#000000",
    inColor: "#09feee",
    className: "rate-star-test",
  };

  const { container } = render(
    <RateStars
      max={props.max}
      value={props.value}
      outColor={props.outColor}
      className={props.className}
      inColor={props.inColor}
    >
      {props.children}
    </RateStars>
  );

  return {
    props: props,
    container: container,
  };
};

describe("RateStars.tsx", () => {
  describe("General Tests.", () => {
    test("It must render all stars based on the maximum number of stars in the container.", () => {
      const { container, props } = renderComponent();

      const root = container.querySelector(".rate-stars") as HTMLDivElement;

      expect(root.children.length).toEqual(props.max);
    });

    test("It must render all stars based on the maximum.", () => {
      const { container, props } = renderComponent();

      const stars = container.querySelectorAll(".rate-stars__star") as NodeList;

      expect(stars).toHaveLength(props.max);
    });

    test("It must render all stars with the props class.", () => {
      const { container, props } = renderComponent();

      const stars = container.querySelectorAll(
        `.${props.className}`
      ) as NodeList;

      expect(stars).toHaveLength(props.max);
    });
  });
});
