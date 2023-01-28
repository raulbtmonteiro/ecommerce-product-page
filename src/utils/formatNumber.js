export const formatCurrency = (price) => {
  return `$ ${price.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export const formatPercent = (percent) => {
  return `${(percent * 100).toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}%`;
};
