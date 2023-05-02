import styled from "styled-components";

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

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
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
