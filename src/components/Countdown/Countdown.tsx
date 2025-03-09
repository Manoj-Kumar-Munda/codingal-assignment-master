import { useEffect, useState, useRef } from "react";

interface Iprops {
  isPauseCountdown: boolean;
}

const Countdown = ({ isPauseCountdown }: Iprops) => {
  console.log(isPauseCountdown);
  
  const [countdown, setCountdown] = useState(600);
  const intervalRef = useRef<number | null>(null);

  const startCountdown = () => {
    intervalRef.current = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(intervalRef.current!);
          return 0;
        }
      });
    }, 1000);
  };

  const pauseCountdown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isPauseCountdown) {
      pauseCountdown();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPauseCountdown]);
  useEffect(() => {
    startCountdown();
  }, []);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <div>
      <span>{formattedTime}</span>
    </div>
  );
};

export default Countdown;
