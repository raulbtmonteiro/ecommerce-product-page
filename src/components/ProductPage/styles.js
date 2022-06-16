import styled from "styled-components";
import Product1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";

export const ProductPageWrapper = styled.main`
  max-width: 1110px;
  margin: 0 auto;
  padding: 90px 47.5px 0 47.5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DisplayImg = styled.img`
  width: 445px;
  border-radius: 15px;
  margin-bottom: 32px;
`;

export const ThumbnailDisplay = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 88px;
    border-radius: 10px;

    cursor: pointer;

    :hover {
      border: 2px solid #ff7e1b;
    }
  }
`;

export const Thumbnail = styled.div.attrs((props) => ({
  imgUrl: props.img,
}))`
  width: 88px;
  border-radius: 10px;

  background-image: url(${Product1Thumbnail});
  background-size: contain;

  cursor: pointer;

  :hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url(${Product1Thumbnail});
    background-size: contain;
    border: 2px solid #ff7e1b;
  }
`;

export const ProductInfo = styled.section`
  max-width: 445px;
`;

export const Company = styled.h2`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;

  color: #ff7e1b;
`;

export const ProductName = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  margin-bottom: 32px;

  color: #1d2026;
`;

export const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 24px;

  color: #69707d;
`;

export const PriceDisplay = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  margin: 0 23px 3px 0;

  display: inline-block;

  color: #1d2026;
`;

export const Discount = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  width: 51px;
  height: 27px;
  margin: auto 0;

  color: #ff7e1b;
  background: #ffeee2;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const OriginalPrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;

  text-decoration-line: line-through;

  color: #b6bcc8;
  margin-bottom: 32px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
