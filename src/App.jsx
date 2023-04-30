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
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductPage />
    </>
  );
}

export default App;
