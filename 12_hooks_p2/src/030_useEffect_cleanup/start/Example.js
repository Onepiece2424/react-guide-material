import { useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true)

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp(prev => !prev)}>トグル</button>
    </>
  )
}
const Timer = () => {
  const [time, setTime] = useState(0);

  // 依存配列を渡さなかった時
  useEffect(() => {
    // console.log('init');
    let intervalId = null
    intervalId = window.setInterval(() => {
      console.log('inteval called');
      setTime(prev => prev + 1);
    }, 1000);

    // Timerコンポーネントが消滅する際に実行
    return () => {
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [])

  // 依存配列を渡した時
  useEffect(() => {
    console.log('updated');
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time)

    // updated endが表示されてからupdatedが表示される。
    return () => {
      console.log('updated end');
    }
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
