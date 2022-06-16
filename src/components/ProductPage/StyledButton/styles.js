import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  height: 56px;
  width: 272px;
  max-width: 100%;

  background-color: #ff7e1b;
  box-shadow: 0px 20px 50px -20px #ff7e1b;
  border-radius: 10px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  margin-left: 15.54px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25px;
  color: white;
`;
