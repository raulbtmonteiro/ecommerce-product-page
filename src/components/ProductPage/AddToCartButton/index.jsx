import { CartContext, AmountSelectorContext } from "../../../context";
import iconCart from "../../../assets/images/icon-cart-white.svg";
import { ButtonWrapper, Button, ButtonText } from "./styles";
import { useContext } from "react";

export const AddToCartButton = ({ product }) => {
  const { onCartIncrease } = useContext(CartContext);
  const { selectorCount, setSelectorCount } = useContext(AmountSelectorContext);

  const handleClick = (product, count) => {
    onCartIncrease(product, count);
    setSelectorCount(0);
  };

  const isDisabled = selectorCount === 0;

  return (
    <ButtonWrapper onClick={() => handleClick(product, selectorCount)}>
      <Button disabled={isDisabled}>
        <img src={iconCart} alt="Carrinho de compras." />
        <ButtonText>Add to cart</ButtonText>
      </Button>
    </ButtonWrapper>
  );
};
