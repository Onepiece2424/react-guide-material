import { useState, useEffect, useLayoutEffect } from 'react'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false)

  useEffect(() => {
    // console.log('init');
    let intervalId = null;
    if (start) {
      intervalId = window.setInterval(() => {
      // console.log('interval running');
      setTime(prev => prev + 1);
      }, 1000);
    }
    return () => {
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [start])

  useEffect(() => {
    // console.log('updated');
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);

    return () => {
      // debugger
      // console.log('updated end');
    }
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key'));
    if(!isNaN(_time)) {
      setTime(_time);
    }
  }, [])

  // 一時停止
  const stop = () => {
    setStart(start => !start)
  };

  // スタート
  const startTimer = () => {
    setStart(start => !start)
  }

  // リセット
  const reset = () => {
    setTime(0)
    setStart(start => !start)
  }

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      <div>
          { start ?
          <button onClick={stop}>一時停止</button>
           :
          <button onClick={startTimer}>スタート</button> }
        <button onClick={reset}>リセット</button>
      </div>
    </>
    );
};

export default Timer;
