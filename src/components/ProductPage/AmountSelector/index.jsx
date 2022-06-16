import { useState } from "react";
import minus from "../../../assets/images/icon-minus.svg";
import plus from "../../../assets/images/icon-plus.svg";
import {
  SelectorContainer,
  SelectorWrapper,
  Minus,
  Plus,
  Amount,
} from "./styles";

export const AmountSelector = ({ count, setCount }) => {
  const subtract = () => {
    return count >= 1 ? setCount(count - 1) : count;
  };

  return (
    <SelectorContainer>
      <SelectorWrapper>
        <Minus onClick={() => subtract()}>
          <img src={minus} />
        </Minus>
        <Amount>{count}</Amount>
        <Plus onClick={() => setCount(count + 1)}>
          <img src={plus} />
        </Plus>
      </SelectorWrapper>
    </SelectorContainer>
  );
};
