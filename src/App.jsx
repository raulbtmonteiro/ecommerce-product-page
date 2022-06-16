import { useState } from "react";
import { Header, ProductPage, Cart } from "./components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState(0);
  const [cartShow, setCartShow] = useState(false);

  const increaseCartProducts = () => {
    setCartProducts(cartProducts + count);
    setCount(0);
  };

  const deleteCartProducts = () => {
    setCartProducts(0);
  };

  return (
    <>
      <GlobalStyle />
      <Header
        cartShow={cartShow}
        setCartShow={setCartShow}
        cartProducts={cartProducts}
      />
      <Cart
        cartShow={cartShow}
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
