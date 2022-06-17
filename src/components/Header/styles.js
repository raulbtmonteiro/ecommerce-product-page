import styled from "styled-components";

export const HeaderWrapper = styled.header`
  max-width: 1110px;
  margin: 0 auto;
  height: 165px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e4e9f2;

  @media screen and (max-width: 1110px) {
    margin: 0 24px;
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

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBar = styled.nav`
  margin-left: 3.5em;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 720px) {
    display: none;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const NavBarItem = styled.a`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.73em;
  margin-right: 2em;

  color: #69707d;

  height: 100%;
  display: flex;
  align-items: center;

  cursor: pointer;

  :hover {
    color: #1d2026;
    border-bottom: 4px solid #ff7e1b;
  }

  @media screen and (max-width: 720px) {
    margin-right: 0;
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
