import { useName } from "./hooks/useName";

const Form = () => {
  const { name, handleOnChangeName } = useName();
  return (
    <form>
      <input type="text" placeholder="name" onChange={handleOnChangeName} />
      <div>{name}</div>
    </form>
  );
};

export default Form;
