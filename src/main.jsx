import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  ProductContextProvider,
  CartContextProvider,
  AmountSelectorContextProvider,
} from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <AmountSelectorContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AmountSelectorContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
