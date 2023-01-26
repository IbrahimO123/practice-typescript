import { useReducer } from "react";

type CounterState = {
  count: number;
};

type ActionPayload = {
  type: "increment" | "decrement";
  payload: number;
};

type ActionReset = {
  type: "reset";
};

type ActionChangeName = {
  type: "changeName";
  field: string;
  payload: string;
};

type CounterAction = ActionPayload | ActionReset;

const initialState = { count: 0, name: " " };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Counter</h3>
      <h5>{counter.count}</h5>
      <p>
        <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
          Increment
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
          Decrement
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </p>
    </div>
  );
};
