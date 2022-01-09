import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const handlePlusCounter = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };
  const handleSubtractCounter = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
  };

  return { counter, handlePlusCounter, handleSubtractCounter };
};
