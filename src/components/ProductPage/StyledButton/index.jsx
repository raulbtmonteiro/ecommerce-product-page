import iconCart from "../../../assets/images/icon-cart-white.svg";
import { ButtonWrapper, Button, ButtonText } from "./styles";

export const StyledButton = ({ increaseCartProducts }) => {
  return (
    <ButtonWrapper onClick={() => increaseCartProducts()}>
      <Button>
        <img src={iconCart} />
        <ButtonText>Add to cart</ButtonText>
      </Button>
    </ButtonWrapper>
  );
};
