import logo from "../../assets/images/logo.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import imageAvatar from "../../assets/images/image-avatar.png";
import {
  HeaderWrapper,
  HeaderLeft,
  HamburgerMenu,
  XDirection,
  Middle,
  YDirection,
  Overlay,
  NavBar,
  NavBarItem,
  HeaderRight,
  CartImg,
  Products,
  Avatar,
} from "./styles";
import { useState } from "react";

const navBarList = ["Collection", "Men", "Women", "About", "Contact"];

export const Header = ({ cartShow, setCartShow, cartProducts }) => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <HamburgerMenu onClick={() => setMenuShow(!menuShow)}>
          <XDirection menuShow={menuShow} />
          <Middle menuShow={menuShow} />
          <YDirection menuShow={menuShow} />
        </HamburgerMenu>
        <img src={logo} alt="Logo da Sneakers Company." />
        <Overlay menuShow={menuShow} onClick={() => setMenuShow(!menuShow)} />
        <NavBar menuShow={menuShow}>
          {navBarList.map((item) => {
            return <NavBarItem key={item}>{item}</NavBarItem>;
          })}
        </NavBar>
      </HeaderLeft>

      <HeaderRight>
        <CartImg
          src={iconCart}
          alt="Carrinho de compras."
          onClick={() => setCartShow(!cartShow)}
        />
        <Products onClick={() => setCartShow(!cartShow)}>
          {cartProducts > 0 && <p>{cartProducts}</p>}
        </Products>
        <Avatar src={imageAvatar} alt="Imagem de perfil do usuário." />
      </HeaderRight>
    </HeaderWrapper>
  );
};
