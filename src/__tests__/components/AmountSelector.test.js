import { AmountSelector } from "../../components/ProductPage/AmountSelector";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<AmountSelector />", () => {
  it("should render a plus button", () => {
    render(<AmountSelector />);
    const plusButton = screen.getByAltText("Operador matemático mais.");
    //fireEvent("click", plusButton);
    expect(plusButton).toBeInTheDocument();
  });

  it("should render a minus button", () => {
    render(<AmountSelector />);
    const minusButton = screen.getByAltText("Operador matemático menos.");
    expect(minusButton).toBeInTheDocument();
  });
});
