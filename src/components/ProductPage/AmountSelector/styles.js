import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: inline-block;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const SelectorWrapper = styled.div`
  height: 56px;
  width: 157px;
  max-width: 100%;

  background: #f6f8fd;
  border-radius: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const Minus = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Plus = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Amount = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #1d2026;
`;
