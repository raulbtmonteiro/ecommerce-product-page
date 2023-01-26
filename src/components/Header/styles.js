import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  max-width: 1110px;
  margin: 0 auto;
  height: 165px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e4e9f2;

  @media screen and (max-width: 1110px) {
    width: 100%;
    margin: 0;
    padding: 0 24px;
  }

  @media screen and (max-width: 720px) {
    height: 68px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
`;

export const HamburgerMenu = styled.div`
  display: none;
  z-index: 6;
  cursor: pointer;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    height: 15px;
    width: 16px;
    justify-content: space-between;
    margin-right: 16px;
    position: relative;
    top: 2px;
  }
`;

export const XDirection = styled.div`
  width: 16px;
  height: 3px;
  background-color: #69707d;
  transition: 500ms;

  ${({ menuShow }) =>
    menuShow &&
    css`
      position: relative;
      top: 5.5px;
      width: 35px;
      transform: rotate(45deg);
    `}
`;

export const Middle = styled.div`
  width: 16px;
  height: 3px;
  background-color: #69707d;

  ${({ menuShow }) =>
    menuShow &&
    css`
      display: none;
    `}
`;

export const YDirection = styled.div`
  width: 16px;
  height: 3px;
  background-color: #69707d;
  transition: 500ms;

  ${({ menuShow }) =>
    menuShow &&
    css`
      position: relative;
      top: -5.5px;
      width: 35px;
      transform: rotate(-45deg);
    `}
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Overlay = styled.div`
  display: none;

  @media screen and (max-width: 720px) {
    ${({ menuShow }) =>
      menuShow &&
      css`
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100vh;
        width: 100vw;
        z-index: 4;
        background-color: rgba(0, 0, 0, 0.5);
      `}
  }
`;

export const NavBar = styled.nav`
  margin-left: 3.5em;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 5;
  transition: 500ms;

  @media screen and (max-width: 720px) {
    left: -315px;
    display: flex;
    background-color: white;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: calc(50% - 26px / 2 - 92px);
    padding-left: 25px;

    ${({ menuShow }) =>
      menuShow &&
      css`
        left: -65px;
      `}
  }
`;

export const NavBarItem = styled.a`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.73em;
  margin-right: 2em;

  color: #69707d;
  text-decoration: none;

  height: 100%;
  display: flex;
  align-items: center;

  cursor: pointer;

  :hover {
    color: #1d2026;
    border-bottom: 4px solid #ff7e1b;
  }

  @media screen and (max-width: 720px) {
    height: 26px;
    margin-right: 0;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #1d2026;
  }
`;

export const CartImg = styled.img`
  cursor: pointer;
`;

export const Products = styled.div`
  width: 19px;
  height: 13px;
  border-radius: 6.5px;

  position: relative;
  top: -10px;
  left: -10px;

  cursor: pointer;

  p {
    font-size: 10px;
    font-weight: 700;
    line-height: 1.2em;

    background-color: #ff7e1b;
    color: white;
    border-radius: inherit;

    text-align: center;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-left: 30px;
  width: 50px;
  cursor: pointer;

  :hover {
    border: 2px solid #ff7e1b;
  }

  @media screen and (max-width: 720px) {
    width: 24px;
    margin-left: 0;
  }
`;
