import styled, { css } from "styled-components";

export const CartContainer = styled.div`
  display: none;
  position: absolute;
  z-index: 4;
  width: 100%;
  margin: 0 calc(-50vw + 555px);

  @media screen and (max-width: 1110px) {
    margin: 0;
    margin-top: 5px;
    right: 24px;
  }

  @media screen and (max-width: 408px) {
    max-width: 100vw;
    right: calc(50vw - 180px);
  }

  @media screen and (max-width: 370px) {
    max-width: 90vw;
    right: 0;
    margin: 5px calc(5vw);
  }

  ${({ cartShow }) =>
    cartShow &&
    css`
      display: flex;
      justify-content: flex-end;
      z-index: 4;
    `};
`;

export const CartWrapper = styled.div`
  position: relative;
  right: 0px;
  width: 360px;
  height: 256px;
  background-color: white;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  border-radius: 10px;
`;

export const Name = styled.div`
  height: 67px;
  width: 100%;
  border-bottom: 1px solid #e4e9f2;
  padding: 24px 0 0 24px;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #1d2026;
`;

export const CartInfo = styled.div`
  height: 188px;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CheckoutButton = styled.button`
  height: 56px;
  width: 312px;
  background: #ff7e1b;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  border: none;

  cursor: pointer;

  color: #ffffff;
`;

export const ProductCartInfo = styled.div`
  height: 52px;
  width: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCartImg = styled.img`
  height: 50px;
  border-radius: 4px;
`;

export const ProductCartTotal = styled.div`
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #69707d;
  }
`;

export const IconDelete = styled.img`
  cursor: pointer;
`;

export const EmptyCart = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  padding: 24px;
  display: flex;
  justify-content: center;

  color: #69707d;
`;
