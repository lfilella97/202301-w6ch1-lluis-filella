import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("It should show a title with the text `ToDos List`", () => {
      const expectedTitle = "ToDos List";

      render(<Layout />);

      const result = screen.getByRole("heading", { name: expectedTitle });
      expect(result).toBeInTheDocument();
    });
  });
});
