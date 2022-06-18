import styled from "styled-components";

export const ProductPageWrapper = styled.main`
  max-width: 1110px;
  margin: 0 auto;
  padding: 90px 47.5px 50px 47.5px;

  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1110px) {
    padding: 50px 24px;
    margin: 0;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 100%;
    flex-direction: column;
    padding: 0;
  }
`;

export const Images = styled.section`
  max-width: 445px;

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

export const DisplayImg = styled.img`
  width: 445px;
  max-width: 100%;
  border-radius: 15px;
  margin-bottom: 32px;

  @media screen and (max-width: 720px) {
    width: 100%;
    border-radius: 0;
    margin-bottom: 0;
  }
`;

export const LeftArrow = styled.div`
  display: none;
  @media screen and (max-width: 720px) {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    left: 16px;
    top: calc(50vw + 68px);
    cursor: pointer;
  }
`;

export const RightArrow = styled.div`
  display: none;
  @media screen and (max-width: 720px) {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    right: 16px;
    top: calc(50vw + 68px);
    cursor: pointer;
  }
`;

export const ThumbnailDisplay = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 88px;
    border-radius: 10px;
    max-width: 23%;

    cursor: pointer;

    :hover {
      border: 2px solid #ff7e1b;
      filter: opacity(50%);
    }
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const ProductInfo = styled.section`
  max-width: 445px;
  margin-left: 15px;

  @media screen and (max-width: 720px) {
    padding: 24px;
    margin: 0 auto;
  }
`;

export const Company = styled.h2`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;

  color: #ff7e1b;

  @media screen and (max-width: 720px) {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.84615px;
    margin-bottom: 19px;
  }
`;

export const ProductName = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  margin-bottom: 32px;

  color: #1d2026;

  @media screen and (max-width: 720px) {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 15px;
  }
`;

export const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 24px;

  color: #69707d;

  @media screen and (max-width: 720px) {
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 24px;
  }
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
  flex-wrap: wrap;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
