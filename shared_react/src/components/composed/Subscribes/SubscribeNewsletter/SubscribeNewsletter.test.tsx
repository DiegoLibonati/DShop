import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { SubscribeNewsletterProps } from "@src/entities/props";

import { SubscribeNewsletter } from "@src/components/composed/Subscribes/SubscribeNewsletter/SubscribeNewsletter.tsx";

type RenderComponent = {
  props: SubscribeNewsletterProps & {
    onSubmit: jest.Mock;
  };
  container: HTMLElement;
};

const renderComponent = (): RenderComponent => {
  const props: SubscribeNewsletterProps & {
    onSubmit: jest.Mock;
  } = {
    title: "title",
    submitLabel: "submitLabel",
    onSubmit: jest.fn(),
  };

  const { container } = render(
    <SubscribeNewsletter
      onSubmit={props.onSubmit}
      submitLabel={props.submitLabel}
      title={props.title}
    ></SubscribeNewsletter>
  );

  return {
    props: props,
    container: container,
  };
};

describe("SubscribeNewsletter.tsx", () => {
  describe("General Tests.", () => {
    test("It must render the SubscribeNewsletter component.", () => {
      const { container } = renderComponent();

      const root = container.querySelector(
        ".subscribe-newsletter"
      ) as HTMLDivElement;

      expect(root).toBeInTheDocument();
    });

    test("It must render the title.", () => {
      const { props } = renderComponent();

      const title = screen.getByRole("heading", { name: props.title });

      expect(title).toBeInTheDocument();
    });

    test("It must render the form, with the input and the submit button.", () => {
      const { container } = renderComponent();

      const form = container.querySelector(
        ".subscribe-newsletter__form"
      ) as HTMLFormElement;
      const input = screen.getByRole("textbox");
      const btnSubmit = container.querySelector(
        ".subscribe-newsletter__form-submit-wrapper"
      ) as HTMLDivElement;

      expect(form).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(btnSubmit).toBeInTheDocument();
    });
  });
});
