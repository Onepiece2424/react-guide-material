import { useState } from "react";
import Timer from './Timer'

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>
        { isDisp ? "非表示" : "表示"}
      </button>
    </>
  )
}

export default Example;
