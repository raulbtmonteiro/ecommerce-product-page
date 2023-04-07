import styled from "styled-components";

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
    opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};
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
    opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};
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