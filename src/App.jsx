import { useState } from "react";
import { Header, ProductPage } from "./components";
import { createGlobalStyle } from "styled-components";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const increaseCartProducts = (product) => {
    if (cartProducts.length > 0) {
      const increasedCart = cartProducts.map((cartProduct) => {
        if (cartProduct.product.id === product.id) {
          return {
            product: product,
            amount: cartProduct.amount + count,
          };
        } else {
          return cartProduct;
        }
      });

      setCartProducts(increasedCart);
    } else {
      setCartProducts([{ product, amount: count }]);
    }
    setCount(0);
  };

  const deleteCartProducts = (product) => {
    const decreasedCart = cartProducts
      .map((item) => {
        if (item.product.id === product.id) {
          return undefined;
        } else {
          return item;
        }
      })
      .filter((item) => item != undefined);
    setCartProducts(decreasedCart);
  };

  return (
    <>
      <GlobalStyle />
      <Header
        cartProducts={cartProducts}
        deleteCartProducts={deleteCartProducts}
      />
      <ProductPage
        count={count}
        setCount={setCount}
        cartProducts={cartProducts}
        increaseCartProducts={increaseCartProducts}
      />
    </>
  );
}

export default App;
