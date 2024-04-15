import { Dispatch, SetStateAction } from "react";

type InputValType = string | number;

const Box = <T extends InputValType>({
  label,
  value,
  onChangeHandler,
}: {
  label: string;
  value: T;
  onChangeHandler: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <div>
      <form>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChangeHandler(e.target.value as T)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Box;
