import { useState, useEffect } from "react";
export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleEventListenerWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleEventListenerWidth);
    return () => {
      window.removeEventListener("resize", handleEventListenerWidth);
    };
  }, []);
  return { width, setWidth };
};
