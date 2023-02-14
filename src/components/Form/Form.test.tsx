import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given the Form component", () => {
  describe("When it renders", () => {
    test("Then it should show an imput with the label `Task`", () => {
      const expectedlabel = "Task";

      render(<Form />);

      const renderedLabel = screen.getByLabelText(expectedlabel);
      const renderedButton = screen.getByRole("button", { name: "create" });

      expect(renderedLabel).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });
  });
});
