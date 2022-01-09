import { useCounter } from "./hooks/useCounter";
import { useName } from "./hooks/useName";
import { useWidth } from "./hooks/useWidth";

const Form = () => {
  const { name, handleOnChangeName } = useName();
  const { counter, handlePlusCounter, handleSubtractCounter } = useCounter();
  const { width } = useWidth();

  return (
    <form>
      <br />
      <input type="text" placeholder="name" onChange={handleOnChangeName} />
      <span> {name}</span>
      <br />
      <br />
      <button onClick={handlePlusCounter}> + </button>
      <button onClick={handleSubtractCounter}> - </button>
      <span> {counter}</span>
      <div>{width}</div>
    </form>
  );
};

export default Form;
