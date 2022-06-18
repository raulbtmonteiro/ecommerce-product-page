import iconCart from "../../../assets/images/icon-cart-white.svg";
import { ButtonWrapper, Button, ButtonText } from "./styles";

export const AddToCartButton = ({ increaseCartProducts }) => {
  return (
    <ButtonWrapper onClick={() => increaseCartProducts()}>
      <Button>
        <img src={iconCart} alt="Carrinho de compras." />
        <ButtonText>Add to cart</ButtonText>
      </Button>
    </ButtonWrapper>
  );
};
