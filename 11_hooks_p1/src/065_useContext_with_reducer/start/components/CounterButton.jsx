import { useCounterDispatch } from "../context/CounterContext";

const CounterButton = ({calcType, step}) => {

    // contextからdispatchの取得
    const dispatch = useCounterDispatch();

    // buttonクリックすると、reducerへdispatch
    const clickHandler = () => {
      dispatch({ type: calcType, step });
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;
