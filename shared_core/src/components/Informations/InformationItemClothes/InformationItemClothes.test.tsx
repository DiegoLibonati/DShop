import { render, screen } from "@testing-library/react";

import { InformationItemClothesProps } from "@src/entities/props";

import { InformationItemClothes } from "@src/components/Informations/InformationItemClothes/InformationItemClothes.tsx";

import { getFinalPriceByDiscount } from "@src/helpers/getFinalPriceByDiscount";

type RenderComponent = {
  props: InformationItemClothesProps;
  container: HTMLElement;
};

const renderComponent = (discount: number): RenderComponent => {
  const props: InformationItemClothesProps = {
    name: "namecito",
    discount: discount,
    price: 100,
    rate: 3,
    className: "test-class",
  };

  const { container } = render(
    <InformationItemClothes
      discount={props.discount}
      name={props.name}
      price={props.price}
      rate={props.rate}
      className={props.className}
    >
      {props.children}
    </InformationItemClothes>
  );

  return {
    props: props,
    container: container,
  };
};

describe("InformationItemClothes.tsx", () => {
  const maxStars = 5;

  describe("General Tests.", () => {
    const discount = 0;

    test("It must render the InformationItemClothes component.", () => {
      const { container, props } = renderComponent(discount);

      const root = container.querySelector(
        ".information-item-clothes"
      ) as HTMLDivElement;
      const name = screen.getByRole("heading", {
        name: props.name,
      }) as HTMLHeadingElement;
      const rateStars = container.querySelector(
        ".rate-stars"
      ) as HTMLDivElement;
      const stars = container.querySelectorAll(".rate-stars__star") as NodeList;
      const rate = screen.getByText(`${props.rate}/${maxStars}`);
      const finalPrice = screen.getByRole("heading", {
        name: `$${props.price}`,
      }) as HTMLHeadingElement;

      expect(root).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(rateStars).toBeInTheDocument();
      expect(stars).toHaveLength(maxStars);
      expect(rate).toBeInTheDocument();
      expect(finalPrice).toBeInTheDocument();
    });
  });

  describe("With discount.", () => {
    const discount = 10;

    test("It must render the InformationItemClothes component with discount.", () => {
      const { props } = renderComponent( discount);

      const finalPrice = getFinalPriceByDiscount(props.price, discount);

      const finalPriceElement = screen.getByRole("heading", {
        name: `$${finalPrice}`,
      }) as HTMLHeadingElement;
      const price = screen.getByRole("heading", {
        name: `$${props.price}`,
      }) as HTMLHeadingElement;
      const discountElement = screen.getByText(
        `-${discount}%`
      ) as HTMLParagraphElement;

      expect(finalPriceElement).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(discountElement).toBeInTheDocument();
    });
  });

  describe("Without discount.", () => {
    const discount = 0;

    test("It must render the InformationItemClothes component without discount.", () => {
      const { props } = renderComponent(discount);

      const price = screen.queryByRole("heading", {
        name: `$${props.price}`,
      }) as HTMLHeadingElement;
      const discountElement = screen.queryByText(
        `-${discount}%`
      ) as HTMLParagraphElement;

      expect(price).toBeInTheDocument();
      expect(discountElement).not.toBeInTheDocument();
    });
  });
});
