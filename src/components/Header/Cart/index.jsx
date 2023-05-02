import Product1Thumbnail from "../../../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../../../assets/images/icon-delete.svg";
import { useContext, useState, useEffect } from "react";
import { formatCurrency } from "../../../utils";
import { CartContext } from "../../../context";
import {
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

import ReactModal from "react-modal";
import Modal from "react-modal";

export const Cart = ({ cartShow, setCartShow }) => {
  const { cartProducts, onCartDecrease } = useContext(CartContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const closeModal = () => {
    setCartShow(!cartShow);
  };

  Modal.setAppElement("#root");

  const customStyles = {
    overlay: {
      backgroundColor: "none",
      margin: "auto",
      maxWidth: "1110px",
    },
    content: {
      top: width < 721 ? "220px" : "292px",
      left: width < 481 ? "50%" : "auto",
      right: width < 481 ? "50%" : "-160px",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "white",
      boxShadow: "0px 20px 50px -20px rgba(29, 32, 38, 0.503143)",
      padding: "0px",
      margin: "0 auto",
      minWidth: "360px",
      minHeight: "256px",
    },
  };

  return (
    <ReactModal
      isOpen={cartShow}
      style={customStyles}
      preventScroll={true}
      onRequestClose={() => closeModal()}
      shouldCloseOnOverlayClick={true}
    >
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
                  onClick={() => onCartDecrease(item.product)}
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
    </ReactModal>
  );
};
