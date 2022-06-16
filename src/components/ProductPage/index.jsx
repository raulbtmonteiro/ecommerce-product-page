import Product1 from "../../assets/images/image-product-1.jpg";
import Product1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import Product2 from "../../assets/images/image-product-2.jpg";
import Product2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import Product3 from "../../assets/images/image-product-3.jpg";
import Product3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import Product4 from "../../assets/images/image-product-4.jpg";
import Product4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";
import { AmountSelector } from "./AmountSelector";
import { StyledButton } from "./StyledButton";
import {
  ProductPageWrapper,
  DisplayImg,
  ThumbnailDisplay,
  Thumbnail,
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
      <section>
        <DisplayImg src={Product1} />
        <ThumbnailDisplay>
          <Thumbnail img="../../assets/images/image-product-1-thumbnail.jpg" />
          <img src={Product2Thumbnail} />
          <img src={Product3Thumbnail} />
          <img src={Product4Thumbnail} />
        </ThumbnailDisplay>
      </section>
      <ProductInfo>
        <Company>Sneaker Company</Company>
        <ProductName>Fall Limited Edition Sneakers</ProductName>
        <ProductDescription>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </ProductDescription>
        <PriceDisplay>
          <Price>$125.00</Price>
          <Discount>50%</Discount>
        </PriceDisplay>
        <OriginalPrice>$250.00</OriginalPrice>
        <Buttons>
          <AmountSelector count={count} setCount={setCount} />
          <StyledButton
            count={count}
            setCount={setCount}
            cartProducts={cartProducts}
            increaseCartProducts={increaseCartProducts}
          />
        </Buttons>
      </ProductInfo>
    </ProductPageWrapper>
  );
};
