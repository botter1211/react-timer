import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) setTime((time) => time + 1);
    }, 1000);
  };
  const stopTimer = () => {
    isStart.current = false;
    active.current.disabled = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    setTime(0);
    active.current.disabled = false;
    clearInterval(refInterval.current);
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
