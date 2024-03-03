import Div from "../Div/Div";
import ButtonPlus from "./ButtonPlus/ButtonPlus";
import ButtonMinus from "./ButtonMinus/ButtonMinus";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonMinus setCount={setCount} count={count}/>
      <Div>{count}</Div>
      <ButtonPlus setCount={setCount} count={count}/>
    </>
  );
};

export default Counter;