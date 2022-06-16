import styled, { css } from "styled-components";

export const CartContainer = styled.section`
  display: none;

  ${({ cartShow }) =>
    cartShow &&
    css`
      display: block;
      max-width: 1110px;
      margin: 0 auto;
    `}
`;

export const CartWrapper = styled.div`
  position: absolute;
  right: 0;
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
