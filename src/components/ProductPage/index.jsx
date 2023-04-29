import { ProductContext } from "../../context";
import { formatCurrency, formatPercent } from "../../utils";
import { AddToCartButton } from "./AddToCartButton";
import { AmountSelector } from "./AmountSelector";
import { ProductImages } from "./ProductImages";
import { useContext } from "react";
import {
  ProductPageWrapper,
  ProductInfo,
  Company,
  ProductName,
  ProductDescription,
  PriceDisplay,
  Price,
  Discount,
  OriginalPrice,
  Buttons,
} from "./styles";

export const ProductPage = () => {
  const { selectedProduct } = useContext(ProductContext);

  return (
    <ProductPageWrapper>
      <ProductImages product={selectedProduct} />

      <ProductInfo>
        <Company>{selectedProduct.brand}</Company>
        <ProductName>{selectedProduct.name}</ProductName>
        <ProductDescription>{selectedProduct.description}</ProductDescription>
        <PriceDisplay>
          <Price>{formatCurrency(selectedProduct.price)}</Price>
          <Discount>{formatPercent(selectedProduct.discount)}</Discount>
        </PriceDisplay>
        <OriginalPrice>
          {formatCurrency(selectedProduct.originalPrice)}
        </OriginalPrice>
        <Buttons>
          <AmountSelector />
          <AddToCartButton product={selectedProduct} />
        </Buttons>
      </ProductInfo>
    </ProductPageWrapper>
  );
};
