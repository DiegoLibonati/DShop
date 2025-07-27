import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { ItemClothesProps } from "@src/entities/props";

import { ItemClothes } from "@src/components/Items/ItemClothes/ItemClothes.tsx";

import { getFinalPriceByDiscount } from "@src/helpers/getFinalPriceByDiscount";

type RenderComponent = {
  props: ItemClothesProps & {
    onClick: jest.Mock;
  };
  container: HTMLElement;
};

const renderComponent = (
  onClick: jest.Mock | undefined,
  discount: number
): RenderComponent => {
  const props: ItemClothesProps & {
    onClick: jest.Mock;
  } = {
    name: "Namecito",
    price: 100,
    rate: 5,
    src: "src",
    discount: discount,
    onClick: onClick!,
  };

  const { container } = render(
    <ItemClothes
      discount={props.discount}
      name={props.name}
      price={props.price}
      rate={props.rate}
      src={props.src}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </ItemClothes>
  );

  return {
    props: props,
    container: container,
  };
};

describe("ItemClothes.tsx", () => {
  const maxStars = 5;

  describe("General Tests.", () => {
    const onClick = undefined;
    const discount = 0;

    test("It must render the ItemClothes component.", () => {
      const { container, props } = renderComponent(onClick, discount);

      const root = container.querySelector(".item-clothes") as HTMLDivElement;
      const img = screen.getByRole("img") as HTMLImageElement;
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
      expect(img).toBeInTheDocument();
      expect(img.src.includes(props.src)).toEqual(true);
      expect(img.alt).toEqual(props.name);
      expect(name).toBeInTheDocument();
      expect(rateStars).toBeInTheDocument();
      expect(stars).toHaveLength(maxStars);
      expect(rate).toBeInTheDocument();
      expect(finalPrice).toBeInTheDocument();
    });
  });

  describe("With discount.", () => {
    const discount = 10;
    const onClick = undefined;

    test("It must render the ItemClothes component with discount.", () => {
      const { props } = renderComponent(onClick, discount);

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
    const onClick = undefined;

    test("It must render the ItemClothes component without discount.", () => {
      const { props } = renderComponent(onClick, discount);

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

  describe("With onClick fn.", () => {
    const onClick = jest.fn();
    const discount = 0;

    test("It must render the ItemClothes component with onClick fn.", () => {
      const { container } = renderComponent(onClick, discount);

      const root = container.querySelector(".item-clothes") as HTMLDivElement;

      expect(root).toBeInTheDocument();
      expect(root.classList.contains("item-clothes--pointer")).toEqual(true);
    });

    test("It must execute the onClick function when the ItemClothes is clicked.", async () => {
      const { container } = renderComponent(onClick, discount);

      const root = container.querySelector(".item-clothes") as HTMLDivElement;

      expect(root).toBeInTheDocument();

      await user.click(root);

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Without onClick fn.", () => {
    const onClick = undefined;
    const discount = 0;

    test("It must render the ItemClothes component without onClick fn.", () => {
      const { container } = renderComponent(onClick, discount);

      const root = container.querySelector(".item-clothes") as HTMLDivElement;

      expect(root).toBeInTheDocument();
      expect(root.classList.contains("item-clothes--pointer")).toEqual(false);
    });
  });
});
