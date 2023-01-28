import { formatPercent, formatCurrency } from "../../utils";

describe("Format Percent Function", () => {
  it("should return value in percentage format", () => {
    expect(formatPercent(0.5)).toEqual("50%");
  });

  it("should return value in percentage format", () => {
    expect(formatPercent(0.555)).toEqual("55.5%");
  });

  it("should return value in percentage format", () => {
    expect(formatPercent(0.56897)).toEqual("56.9%");
  });
});

describe("Format Currency Function", () => {
  test("should return value in currency format ", () => {
    expect(formatCurrency(150)).toEqual("$ 150.00");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.0)).toEqual("$ 150.00");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.59)).toEqual("$ 150.59");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.002)).toEqual("$ 150.00");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.599)).toEqual("$ 150.60");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.594)).toEqual("$ 150.59");
  });
});
