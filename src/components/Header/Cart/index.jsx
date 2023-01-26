import Product1Thumbnail from "../../../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../../../assets/images/icon-delete.svg";
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
  Flex,
} from "./styles";
import { formatCurrency } from "../../../utils/Utils";

export const Cart = ({ cartProducts, deleteCartProducts }) => {
  return (
    <CartContainer>
      <CartWrapper>
        <Name>Cart</Name>
        {cartProducts.length > 0 ? (
          <CartInfo>
            {cartProducts.map((item) => {
              return (
                <ProductCartInfo key={Math.random()}>
                  <ProductCartImg
                    src={Product1Thumbnail}
                    alt="Imagem do produto."
                  />
                  <ProductCartTotal>
                    <p>{item.product.name}</p>
                    <Flex>
                      <p>
                        {formatCurrency(item.product.price)} x {item.amount}
                      </p>
                      <b>{formatCurrency(item.product.price * item.amount)}</b>
                    </Flex>
                  </ProductCartTotal>
                  <IconDelete
                    src={iconDelete}
                    onClick={() => deleteCartProducts(item.product)}
                    alt="Ícone de lixeira para deletar produto do carrinho."
                  />
                </ProductCartInfo>
              );
            })}
            <CheckoutButton>Checkout</CheckoutButton>
          </CartInfo>
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartWrapper>
    </CartContainer>
  );
};
