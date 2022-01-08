import { useState } from "react";

export const useName = () => {
  const [name, setName] = useState("");

  const handleOnChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  return { name, handleOnChangeName, setName };
};
