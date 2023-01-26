import iconCart from "../../../assets/images/icon-cart-white.svg";
import { ButtonWrapper, Button, ButtonText } from "./styles";

export const AddToCartButton = ({ increaseCartProducts, product }) => {
  return (
    <ButtonWrapper onClick={() => increaseCartProducts(product)}>
      <Button>
        <img src={iconCart} alt="Carrinho de compras." />
        <ButtonText>Add to cart</ButtonText>
      </Button>
    </ButtonWrapper>
  );
};
