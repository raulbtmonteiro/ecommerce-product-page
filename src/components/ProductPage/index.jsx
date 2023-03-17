import Product1 from "../../assets/images/image-product-1.jpg";
import Product2 from "../../assets/images/image-product-2.jpg";
import Product3 from "../../assets/images/image-product-3.jpg";
import Product4 from "../../assets/images/image-product-4.jpg";
import { AmountSelector } from "./AmountSelector";
import { AddToCartButton } from "./AddToCartButton";
import { ProductImages } from "./ProductImages";
import { formatCurrency, formatPercent } from "../../utils";
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

export const ProductPage = ({
  count,
  setCount,
  cartProducts,
  increaseCartProducts,
}) => {

  return (
    <ProductPageWrapper>
      <ProductImages product={product}/>

      <ProductInfo>
        <Company>{product.brand}</Company>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <PriceDisplay>
          <Price>{formatCurrency(product.price)}</Price>
          <Discount>{formatPercent(product.discount)}</Discount>
        </PriceDisplay>
        <OriginalPrice>{formatCurrency(product.originalPrice)}</OriginalPrice>
        <Buttons>
          <AmountSelector count={count} setCount={setCount} />
          <AddToCartButton
            count={count}
            setCount={setCount}
            cartProducts={cartProducts}
            increaseCartProducts={increaseCartProducts}
            product={product}
          />
        </Buttons>
      </ProductInfo>
    </ProductPageWrapper>
  );
};

const product = {
  id: 123456,
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125,
  discount: 0.5,
  originalPrice: 250,
  images: [Product1, Product2, Product3, Product4],
};
