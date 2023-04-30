import { createContext, useState } from "react";

export const AmountSelectorContext = createContext({
  selectorCount: null,
  setSelectorCount: () => {},
});

export const AmountSelectorContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const contextValue = {
    selectorCount: count,
    setSelectorCount: setCount,
  };

  return (
    <AmountSelectorContext.Provider value={contextValue}>
      {children}
    </AmountSelectorContext.Provider>
  );
};
