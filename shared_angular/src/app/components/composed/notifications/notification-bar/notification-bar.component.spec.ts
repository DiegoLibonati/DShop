import { render, screen } from "@testing-library/angular";
import user from "@testing-library/user-event";

import { NotificationBarProps } from "@src/app/entities/props";

import { NotificationBarComponent } from "@src/app/components/composed/notifications/notification-bar/notification-bar.component";
import { SvgCloseComponent } from "@src/app/components/core/svgs/svg-close/svg-close.component";

type RenderComponent = {
  props: NotificationBarProps & { onClose: jest.Mock };
  container: Element;
};

const renderComponent = async (): Promise<RenderComponent> => {
  const props: NotificationBarProps & { onClose: jest.Mock } = {
    text: "asd",
    className: "test class",
    onClose: jest.fn(),
  };

  const { container } = await render(NotificationBarComponent, {
    componentProperties: props,
    declarations: [SvgCloseComponent],
  });

  return {
    props: props,
    container: container,
  };
};

describe("notification-bar.component.ts", () => {
  describe("General Tests.", () => {
    test("It must render the notification bar.", async () => {
      const { container } = await renderComponent();

      const notificationBar = container.querySelector(
        ".notification-bar"
      ) as HTMLDivElement;

      expect(notificationBar).toBeInTheDocument();
    });

    test("It must render text sent by props.", async () => {
      const { props } = await renderComponent();

      const text = screen.getByText(props.text);

      expect(text).toBeInTheDocument();
    });

    test("The onClose function must be executed when the button is pressed.", async () => {
      const { props } = await renderComponent();

      const btnClose = screen.getByLabelText("close notification bar");

      expect(btnClose).toBeInTheDocument();

      await user.click(btnClose);

      expect(props.onClose).toHaveBeenCalledTimes(1);
    });
  });
});
