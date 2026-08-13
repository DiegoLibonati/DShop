import { render, screen } from "@testing-library/react";

import type { RenderResult } from "@testing-library/react";
import type { FooterSectionProps } from "@container/types/props";

import FooterSection from "@container/components/Footers/FooterSection/FooterSection";

const renderComponent = (props: Partial<FooterSectionProps> = {}): RenderResult => {
  const defaultProps: FooterSectionProps = {
    title: "Company",
    content: [{ title: "About" }, { title: "Careers" }],
    ...props,
  };

  return render(<FooterSection {...defaultProps} />);
};

describe("FooterSection", () => {
  describe("rendering", () => {
    it("should render the section title as a heading", () => {
      renderComponent({ title: "Resources" });

      expect(screen.getByRole("heading", { name: "Resources" })).toBeInTheDocument();
    });

    it("should render the text of every content item", () => {
      renderComponent();

      expect(screen.getByText("About")).toBeInTheDocument();
      expect(screen.getByText("Careers")).toBeInTheDocument();
    });

    it("should not render the items as links", () => {
      renderComponent({ content: [{ title: "Blog" }] });

      expect(screen.queryByRole("link")).not.toBeInTheDocument();
      expect(screen.getByText("Blog")).toBeInTheDocument();
    });
  });

  describe("edge cases", () => {
    it("should render no items when the content is empty", () => {
      renderComponent({ content: [] });

      expect(screen.getByRole("heading", { name: "Company" })).toBeInTheDocument();
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
  });
});
