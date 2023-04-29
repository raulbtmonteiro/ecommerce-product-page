import { createContext, useState } from "react";
import Product1 from "../assets/images/image-product-1.jpg";
import Product2 from "../assets/images/image-product-2.jpg";
import Product3 from "../assets/images/image-product-3.jpg";
import Product4 from "../assets/images/image-product-4.jpg";

export const ProductContext = createContext({
  selectedProduct: null,
  onProductChange: (newProduct) => {},
});

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState(productInfo);
  const handleProductChange = (product) => setProduct(product);

  const contextValue = {
    selectedProduct: product,
    onProductChange: handleProductChange,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

const productInfo = {
  id: 123456,
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125,
  discount: 0.5,
  originalPrice: 250,
  images: [Product1, Product2, Product3, Product4],
};
