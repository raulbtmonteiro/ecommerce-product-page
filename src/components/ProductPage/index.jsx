import Product1 from "../../assets/images/image-product-1.jpg";
import Product2 from "../../assets/images/image-product-2.jpg";
import Product3 from "../../assets/images/image-product-3.jpg";
import Product4 from "../../assets/images/image-product-4.jpg";
import leftarrow from "../../assets/images/leftArrow.svg";
import rightarrow from "../../assets/images/rightArrow.svg";
import { AmountSelector } from "./AmountSelector";
import { AddToCartButton } from "./AddToCartButton";
import { useEffect } from "react";
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
  const selectImage = (e) => {
    const imgList = e.target.parentNode;
    for (var i = 0; i < 4; i++) {
      imgList.children[i].id = "";
    }
    e.target.id = "selectedImg";
    console.log(e.target.src);
    const imageDisplay = document.getElementById("imageDisplay");
    imageDisplay.src = e.target.src;
  };

  useEffect(() => {
    const thumbnailDisplay = document.getElementById("thumbanildisplay");
    const firstImg = thumbnailDisplay.children[0];
    firstImg.id = "selectedImg";
  }, []);

  const nextImage = () => {
    const thumbnailDisplay = document.getElementById("thumbanildisplay");
    for (var i = 0; i < 4; i++) {
      if (thumbnailDisplay.children[i].id == "selectedImg") {
        if (i < 3) {
          thumbnailDisplay.children[i].id = "";
          thumbnailDisplay.children[i + 1].id = "selectedImg";
          break;
        }
      }
    }
    const imageDisplay = document.getElementById("imageDisplay");
    const selectedImg = document.getElementById("selectedImg");
    imageDisplay.src = selectedImg.src;
  };

  const previousImage = () => {
    const thumbnailDisplay = document.getElementById("thumbanildisplay");
    for (var i = 0; i < 4; i++) {
      if (thumbnailDisplay.children[i].id == "selectedImg") {
        if (i > 0) {
          thumbnailDisplay.children[i].id = "";
          thumbnailDisplay.children[i - 1].id = "selectedImg";
          break;
        }
      }
    }
    const imageDisplay = document.getElementById("imageDisplay");
    const selectedImg = document.getElementById("selectedImg");
    imageDisplay.src = selectedImg.src;
  };

  return (
    <ProductPageWrapper>
      <Images>
        <LeftArrow onClick={() => previousImage()}>
          <img src={leftarrow} alt="Seta seletora da foto anterior." />
        </LeftArrow>
        <DisplayImg id="imageDisplay" src={Product1} alt="Imagem do produto" />
        <RightArrow onClick={() => nextImage()}>
          <img src={rightarrow} alt="Seta seletora da próxima foto." />
        </RightArrow>
        <ThumbnailDisplay id="thumbanildisplay">
          <img
            src={Product1}
            alt="Imagem do produto"
            onClick={(e) => selectImage(e)}
          />
          <img
            src={Product2}
            alt="Imagem do produto"
            onClick={(e) => selectImage(e)}
          />
          <img
            src={Product3}
            alt="Imagem do produto"
            onClick={(e) => selectImage(e)}
          />
          <img
            src={Product4}
            alt="Imagem do produto"
            onClick={(e) => selectImage(e)}
          />
        </ThumbnailDisplay>
      </Images>
      <ProductInfo>
        <Company>Sneaker Company</Company>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <PriceDisplay>
          <Price>{product.price}</Price>
          <Discount>{product.discount}</Discount>
        </PriceDisplay>
        <OriginalPrice>{product.originalPrice}</OriginalPrice>
        <Buttons>
          <AmountSelector count={count} setCount={setCount} />
          <AddToCartButton
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

const product = {
  name: "Fall Limited Edition Sneakers",
  description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: "$125.00",
  discount: "50%",
  originalPrice: "$250.00",
};
