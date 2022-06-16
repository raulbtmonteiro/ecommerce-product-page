import logo from "../../assets/images/logo.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import imageAvatar from "../../assets/images/image-avatar.png";
import {
  HeaderWrapper,
  HeaderLeft,
  NavBar,
  NavBarItem,
  HeaderRight,
  CartImg,
  Products,
  Avatar,
} from "./styles";

const navBarList = ["Collection", "Men", "Women", "About", "Contact"];

export const Header = ({ cartShow, setCartShow, cartProducts }) => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <img src={logo} />
        <NavBar>
          {navBarList.map((item) => {
            return <NavBarItem key={item}>{item}</NavBarItem>;
          })}
        </NavBar>
      </HeaderLeft>

      <HeaderRight>
        <CartImg src={iconCart} onClick={() => setCartShow(!cartShow)} />
        <Products onClick={() => setCartShow(!cartShow)}>
          {cartProducts > 0 && <p>{cartProducts}</p>}
        </Products>
        <Avatar src={imageAvatar} />
      </HeaderRight>
    </HeaderWrapper>
  );
};
