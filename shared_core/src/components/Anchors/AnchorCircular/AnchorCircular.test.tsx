import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { AnchorCircularProps } from "@src/entities/props";

import { AnchorCircular } from "@src/components/Anchors/AnchorCircular/AnchorCircular.tsx";

type RenderComponent = {
  props: AnchorCircularProps;
  container: HTMLElement;
};

const renderComponent = (
  borderGray: boolean,
  target: React.HTMLAttributeAnchorTarget = "_blank"
): RenderComponent => {
  const props: AnchorCircularProps = {
    ariaLabel: "aria-labelss",
    href: "https://www.google.com.ar",
    borderGray: borderGray,
    target: target,
    children: "Test",
    className: "test-class",
  };

  const { container } = render(
    <AnchorCircular
      href={props.href}
      borderGray={props.borderGray}
      target={props.target}
      ariaLabel={props.ariaLabel}
      className={props.className}
    >
      {props.children}
    </AnchorCircular>
  );

  return {
    props: props,
    container: container,
  };
};

describe("AnchorCircular.tsx", () => {
  const borderGray = false;

  describe("General Tests.", () => {
    test("It should render the anchor.", () => {
      const { props } = renderComponent(borderGray);

      const anchor = screen.getByRole("link", { name: props.ariaLabel });

      expect(anchor).toBeInTheDocument();
      expect(anchor).toHaveAttribute("href", props.href);
      expect(anchor).toHaveAttribute("target", props.target);
      expect(anchor.classList.contains("anchor-circular")).toBeTruthy();
    });

    test("It must render the child.", () => {
      const { props } = renderComponent(borderGray);

      const child = screen.getByText(props.children as string);

      expect(child).toBeInTheDocument();
    });
  });

  describe("With borderGray.", () => {
    const borderGray = true;

    test("It must render the anchor with a gray border.", () => {
      const { props } = renderComponent(borderGray);

      const anchor = screen.getByRole("link", { name: props.ariaLabel });

      expect(anchor).toBeInTheDocument();
      expect(
        anchor.classList.contains("anchor-circular--border-gray")
      ).toBeTruthy();
    });
  });

  describe("Without borderGray.", () => {
    const borderGray = false;

    test("It must NOT render the anchor with a gray border.", () => {
      const { props } = renderComponent(borderGray);

      const anchor = screen.getByRole("link", { name: props.ariaLabel });

      expect(anchor).toBeInTheDocument();
      expect(
        anchor.classList.contains("anchor-circular--border-gray")
      ).toBeFalsy();
    });
  });

  describe("With a specific target.", () => {
    const target = "_self";

    test("It must render with a custom target.", () => {
      const { props } = renderComponent(borderGray, target);

      const anchor = screen.getByRole("link", { name: props.ariaLabel });

      expect(anchor).toBeInTheDocument();
      expect(anchor).toHaveAttribute("target", props.target);
    });
  });
});
