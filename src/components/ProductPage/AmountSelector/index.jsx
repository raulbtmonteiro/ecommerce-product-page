import minus from "../../../assets/images/icon-minus.svg";
import { AmountSelectorContext } from "../../../context";
import plus from "../../../assets/images/icon-plus.svg";
import { useContext } from "react";
import {
  SelectorContainer,
  SelectorWrapper,
  Minus,
  Plus,
  Amount,
} from "./styles";

export const AmountSelector = () => {
  const { selectorCount, setSelectorCount } = useContext(AmountSelectorContext);

  const decreaseSelector = () => {
    return selectorCount >= 1
      ? setSelectorCount((prevState) => prevState - 1)
      : selectorCount;
  };

  return (
    <SelectorContainer>
      <SelectorWrapper>
        <Minus onClick={() => decreaseSelector()}>
          <img src={minus} alt="Operador matemático menos." />
        </Minus>
        <Amount>{selectorCount}</Amount>
        <Plus onClick={() => setSelectorCount((prevState) => prevState + 1)}>
          <img src={plus} alt="Operador matemático mais." />
        </Plus>
      </SelectorWrapper>
    </SelectorContainer>
  );
};
