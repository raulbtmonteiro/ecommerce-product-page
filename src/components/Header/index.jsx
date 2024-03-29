import imageAvatar from "../../assets/images/image-avatar.png";
import iconCart from "../../assets/images/icon-cart.svg";
import logo from "../../assets/images/logo.svg";
import { useState, useContext } from "react";
import { CartContext } from "../../context";
import { Cart } from "./Cart";
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

const navBarList = ["Collection", "Men", "Women", "About", "Contact"];

export const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const { cartProducts } = useContext(CartContext);

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
            return (
              <NavBarItem href="#" key={item}>
                {item}
              </NavBarItem>
            );
          })}
        </NavBar>
      </HeaderLeft>

      <HeaderRight>
        <CartImg
          src={iconCart}
          alt="Carrinho de compras."
          onClick={() => setCartShow(!cartShow)}
        />
        {cartShow && <Cart cartShow={cartShow} setCartShow={setCartShow} />}
        <Products onClick={() => setCartShow(!cartShow)}>
          <p>
            {cartProducts.length == 1
              ? cartProducts[0].amount
              : cartProducts.length > 1 &&
                cartProducts.reduce((acc, cur) => acc + cur.amount)}
          </p>
        </Products>
        <Avatar src={imageAvatar} alt="Imagem de perfil do usuário." />
      </HeaderRight>
    </HeaderWrapper>
  );
};
