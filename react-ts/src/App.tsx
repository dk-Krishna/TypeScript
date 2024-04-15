import { useState } from "react";
import { decrement, increment, incrementByValue, StateType } from "./redux";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [val, setVal] = useState<number>(0);
  const { count } = useSelector((state: StateType) => state.root);
  const dispatch = useDispatch();

  const incrementByValueHandler = (val: number) => {
    dispatch(incrementByValue(val));
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementHandler = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>Hey there!</h1>
      <h3>Redux Toolkit</h3>

      <p>Count: {count}</p>

      <button onClick={decrementHandler}>-</button>
      <button onClick={incrementHandler}>+</button>

      <input
        type="text"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button onClick={() => incrementByValueHandler(val)}>Add</button>
    </div>
  );
};

export default App;
