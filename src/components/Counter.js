import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./../reducers/counterSlice";
// import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [input, setInput] = React.useState(0);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br />
        <input type="number" onInput={(e) => setInput(e.target.value)} />
        <button onClick={() => dispatch( incrementByAmount(input) )}>
          Add Values
        </button>
      </div>
    </div>
  );
}
