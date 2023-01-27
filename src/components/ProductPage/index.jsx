import Product1 from "../../assets/images/image-product-1.jpg";
import Product2 from "../../assets/images/image-product-2.jpg";
import Product3 from "../../assets/images/image-product-3.jpg";
import Product4 from "../../assets/images/image-product-4.jpg";
import leftarrow from "../../assets/images/leftArrow.svg";
import rightarrow from "../../assets/images/rightArrow.svg";
import { AmountSelector } from "./AmountSelector";
import { AddToCartButton } from "./AddToCartButton";
import { useEffect, useRef, useState } from "react";
import { formatCurrency, formatPercent } from "../../utils";
import {
  ProductPageWrapper,
  Images,
  DisplayImg,
  LeftArrow,
  RightArrow,
  ThumbnailDisplay,
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
  const displayRef = useRef();
  const imgListRef = useRef();
  const [imageNumber, setImageNumber] = useState(0);

  const selectImage = (e) => {
    for (var i = 0; i < imgListRef.current.children.length; i++) {
      imgListRef.current.children[i].id = "";
    }
    e.target.id = "selectedImg";
    displayRef.current.src = e.target.src;
  };

  useEffect(() => {
    imgListRef.current.children[0].id = "selectedImg";
  }, []);

  const nextImage = () => {
    if (imageNumber < product.images.length - 1) {
      setImageNumber((prevState) => prevState + 1);
    }
  };

  const previousImage = () => {
    if (imageNumber > 0) {
      setImageNumber((prevState) => prevState - 1);
    }
  };

  return (
    <ProductPageWrapper>
      <Images>
        <LeftArrow onClick={() => previousImage()}>
          <img src={leftarrow} alt="Seta seletora da foto anterior." />
        </LeftArrow>
        <DisplayImg
          src={product.images[imageNumber]}
          alt="Imagem do produto"
          ref={displayRef}
        />
        <RightArrow onClick={() => nextImage()}>
          <img src={rightarrow} alt="Seta seletora da próxima foto." />
        </RightArrow>
        <ThumbnailDisplay ref={imgListRef}>
          {product.images.map((img) => {
            return (
              <img
                src={img}
                alt="Imagem do produto"
                onClick={(e) => selectImage(e)}
                key={Math.random()}
              />
            );
          })}
        </ThumbnailDisplay>
      </Images>

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
