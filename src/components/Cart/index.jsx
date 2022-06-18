import Product1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../../assets/images/icon-delete.svg";
import {
  CartContainer,
  CartWrapper,
  Name,
  CartInfo,
  ProductCartInfo,
  ProductCartImg,
  ProductCartTotal,
  IconDelete,
  CheckoutButton,
  EmptyCart,
} from "./styles";

export const Cart = ({ cartShow, cartProducts, deleteCartProducts }) => {
  const totalPrice = cartProducts * 125;

  return (
    <CartContainer cartShow={cartShow}>
      <CartWrapper>
        <Name>Cart</Name>
        {cartProducts > 0 ? (
          <CartInfo>
            <ProductCartInfo>
              <ProductCartImg
                src={Product1Thumbnail}
                alt="Imagem do produto."
              />
              <ProductCartTotal>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {cartProducts} <b>${totalPrice.toFixed(2)}</b>
                </p>
              </ProductCartTotal>
              <IconDelete
                src={iconDelete}
                onClick={() => deleteCartProducts()}
                alt="Ícone de lixeira para deletar produto do carrinho."
              />
            </ProductCartInfo>
            <CheckoutButton>Checkout</CheckoutButton>
          </CartInfo>
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartWrapper>
    </CartContainer>
  );
};
