import { createContext, useState } from "react";

export const CartContext = createContext({
  cartProducts: null,
  onCartIncrease: (newProduct, count) => {},
  onCartDecrease: (productId) => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const increaseCartProducts = (product, count) => {
    if (cart.length > 0) {
      const increasedCart = cart.map((cartProduct) => {
        if (cartProduct.product.id === product.id) {
          return {
            product: product,
            amount: cartProduct.amount + count,
          };
        } else {
          return cartProduct;
        }
      });
      setCart(increasedCart);
    } else {
      setCart([{ product, amount: count }]);
    }
  };

  const deleteCartProducts = (product) => {
    const decreasedCart = cart
      .map((item) => {
        if (item.product.id === product.id) {
          return undefined;
        } else {
          return item;
        }
      })
      .filter((item) => item != undefined);
    setCart(decreasedCart);
  };

  const contextValue = {
    cartProducts: cart,
    onCartIncrease: increaseCartProducts,
    onCartDecrease: deleteCartProducts,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
