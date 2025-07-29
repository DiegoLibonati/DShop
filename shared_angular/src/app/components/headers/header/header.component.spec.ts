import { render, screen } from "@testing-library/angular";
import user from "@testing-library/user-event";

import { HeaderProps } from "@src/app/entities/props";

import { HeaderComponent } from "@src/app/components/headers/header/header.component";
import { SvgSearchComponent } from "@src/app/components/svgs/svg-search/svg-search.component";
import { SvgHamburgerMenuComponent } from "@src/app/components/svgs/svg-hamburger-menu/svg-hamburger-menu.component";
import { SvgChevronDownComponent } from "@src/app/components/svgs/svg-chevron-down/svg-chevron-down.component";
import { SvgChevronUpComponent } from "@src/app/components/svgs/svg-chevron-up/svg-chevron-up.component";
import { SvgCartShoppingComponent } from "@src/app/components/svgs/svg-cart-shopping/svg-cart-shopping.component";

import { HEADER_OPTIONS } from "@src/app/constants/components.constants";

type RenderComponent = {
  props: HeaderProps & {
    onClickMenu: jest.Mock;
    onSubmitSearch: jest.Mock;
    onClickSearch: jest.Mock;
    onClickCart: jest.Mock;
  };
  container: Element;
};

const renderComponent = async (): Promise<RenderComponent> => {
  const props: HeaderProps & {
    onClickMenu: jest.Mock;
    onSubmitSearch: jest.Mock;
    onClickSearch: jest.Mock;
    onClickCart: jest.Mock;
  } = {
    name: "namecito",
    options: HEADER_OPTIONS.map((ho) => {
      return { ...ho, onClick: jest.fn() };
    }),
    onClickCart: jest.fn(),
    onClickMenu: jest.fn(),
    onClickSearch: jest.fn(),
    onSubmitSearch: jest.fn(),
  };

  const { container } = await render(HeaderComponent, {
    declarations: [
      SvgSearchComponent,
      SvgHamburgerMenuComponent,
      SvgChevronDownComponent,
      SvgChevronUpComponent,
      SvgCartShoppingComponent,
    ],
    componentProperties: props,
  });

  return {
    props: props,
    container: container,
  };
};

describe("header.component.ts", () => {
  describe("General Tests.", () => {
    test("It must render the component.", async () => {
      const { container } = await renderComponent();

      const header = container.querySelector(".header") as HTMLElement;

      expect(header).toBeInTheDocument();
    });
  });

  describe("Header logo section.", () => {
    test("It must render the logo section of the header.", async () => {
      const { container, props } = await renderComponent();

      const headerLogo = container.querySelector(
        ".header__logo"
      ) as HTMLDivElement;
      const btnHeaderOpen = screen.getByRole("button", {
        name: "header open",
      }) as HTMLButtonElement;
      const title = screen.getByRole("heading", {
        name: props.name,
      }) as HTMLHeadingElement;

      expect(headerLogo).toBeInTheDocument();
      expect(btnHeaderOpen).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });

    test("The onClickMenu function should be executed when the open header is clicked.", async () => {
      const { props } = await renderComponent();

      const btnHeaderOpen = screen.getByRole("button", {
        name: "header open",
      }) as HTMLButtonElement;

      expect(btnHeaderOpen).toBeInTheDocument();

      await user.click(btnHeaderOpen);

      expect(props.onClickMenu).toHaveBeenCalledTimes(1);
      expect(props.onClickMenu).toHaveBeenCalledWith(expect.any(Event));
    });
  });

  describe("Header options section.", () => {
    test("It must render the options section of the header.", async () => {
      const { container } = await renderComponent();

      const headerOptions = container.querySelector(
        ".header__options"
      ) as HTMLElement;

      expect(headerOptions).toBeInTheDocument();
    });

    test("It must render each options of options header section.", async () => {
      const { props } = await renderComponent();

      props.options.forEach(async (option) => {
        const btnOption = (await screen.findByRole("button", {
          name: new RegExp(`header ${option.name}`),
        })) as HTMLButtonElement;
        const btnText = screen.getByText(option.name) as HTMLParagraphElement;

        expect(btnOption).toBeInTheDocument();
        expect(btnText).toBeInTheDocument();

        if (option.isMenu) {
          const svgMenu = btnOption.querySelector(
            ".header__option-icon"
          ) as HTMLElement;

          expect(svgMenu).toBeInTheDocument();
        }
      });
    });

    test("It must execute the onClick fn on each options of options header section.", async () => {
      const { props } = await renderComponent();

      props.options.forEach(async (option) => {
        const btnOption = (await screen.findByRole("button", {
          name: new RegExp(`header ${option.name}`),
        })) as HTMLButtonElement;

        await user.click(btnOption);

        expect(option.onClick).toHaveBeenCalledTimes(1);
        expect(option.onClick).toHaveBeenCalledWith(expect.any(Event));
      });
    });
  });

  describe("Header form section.", () => {
    test("It must render the form section of the header.", async () => {
      const { container } = await renderComponent();

      const headerForm = container.querySelector(
        ".header__search"
      ) as HTMLFormElement;
      const btnSubmit = screen.getByLabelText(
        /search button/i
      ) as HTMLButtonElement;
      const input = screen.getByPlaceholderText("Search for products...");

      expect(headerForm).toBeInTheDocument();
      expect(btnSubmit).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });

    test("The onSubmitSearch function must be executed when the search button is clicked.", async () => {
      const text = "hola";

      const { container, props } = await renderComponent();

      const headerForm = container.querySelector(
        ".header__search"
      ) as HTMLFormElement;
      const btnSubmit = screen.getByLabelText(
        /search button/i
      ) as HTMLButtonElement;
      const input = screen.getByPlaceholderText("Search for products...");

      expect(headerForm).toBeInTheDocument();
      expect(btnSubmit).toBeInTheDocument();
      expect(input).toBeInTheDocument();

      await user.click(input);
      await user.keyboard(text);

      headerForm.dispatchEvent(
        new SubmitEvent("submit", { bubbles: true, cancelable: true })
      );

      expect(props.onSubmitSearch).toHaveBeenCalledTimes(1);
      expect(props.onSubmitSearch).toHaveBeenCalledWith(
        expect.any(SubmitEvent),
        text
      );
    });
  });

  describe("Header actions section.", () => {
    test("It must render the actions section of the header.", async () => {
      const { container } = await renderComponent();

      const headerActions = container.querySelector(
        ".header__actions"
      ) as HTMLFormElement;
      const btnHeaderSearch = screen.getByLabelText(
        /header search/i
      ) as HTMLButtonElement;
      const btnHeaderCart = screen.getByLabelText(
        /header cart/i
      ) as HTMLButtonElement;

      expect(headerActions).toBeInTheDocument();
      expect(btnHeaderSearch).toBeInTheDocument();
      expect(btnHeaderCart).toBeInTheDocument();
    });

    test("The onClickSearch and onClickCart functions must be executed when their respective buttons are clicked.", async () => {
      const { props } = await renderComponent();

      const btnHeaderSearch = screen.getByLabelText(
        /header search/i
      ) as HTMLButtonElement;
      const btnHeaderCart = screen.getByLabelText(
        /header cart/i
      ) as HTMLButtonElement;

      expect(btnHeaderSearch).toBeInTheDocument();
      expect(btnHeaderCart).toBeInTheDocument();

      await user.click(btnHeaderSearch);

      expect(props.onClickSearch).toHaveBeenCalledTimes(1);
      expect(props.onClickSearch).toHaveBeenCalledWith(expect.any(Event));

      await user.click(btnHeaderCart);

      expect(props.onClickCart).toHaveBeenCalledTimes(1);
      expect(props.onClickCart).toHaveBeenCalledWith(expect.any(Event));
    });
  });
});
