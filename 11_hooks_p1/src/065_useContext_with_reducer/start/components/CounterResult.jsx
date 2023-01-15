import { useCounter } from "../context/CounterContext";

const CounterResult = () => {

  // contextからstateを取得
  const state = useCounter();

  return <h3>{state}</h3>;
};

export default CounterResult;
