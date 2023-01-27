import { formatPercent, formatCurrency } from "../../utils";

describe("Format Percent Function", () => {
  it("should return in percent format ", () => {
    expect(formatPercent(0.5)).toEqual("50%");
  });
});

describe("Format Currency Function", () => {
  test("should return value in currency format ", () => {
    expect(formatCurrency(150)).toEqual("$ 150.00");
  });
});
