import { useRef, useState } from "react";
import "./App.css";

const padTime = (time) => {
  return time.toString().padStart(2, "0");
};

export default function App() {
  const [title, setTitle] = useState("Start your 25 minute Goal now");

  const [timeleft, settimeLeft] = useState(25 * 60);
  // const audio = new Audio("/stayingalive.mp3");
  const [isRunning, setIsrunning] = useState(false);
  const interval = useRef(null);

  const startTime = () => {
    // console.log(audio.play());
    if (interval.current !== null) return;
    setTitle("Go Get'em🔥👀⏳");

    setIsrunning(true);
    interval.current = setInterval(() => {
      settimeLeft((timeleft) => {
        if (timeleft >= 1) return timeleft - 1;
        resettimer();
        return 0;
      });
    }, 1000);
  };
  const stopTimer = () => {
    // console.log(audio.pause());
    if (interval.current === null) return;
    clearInterval(interval.current);
    if (minutes > 20) {
      setTitle("Come on, don't give up yet 🐣");
    } else setTitle("Good job👏💯");
    interval.current = null;
    setIsrunning(false);
  };

  const resettimer = () => {
    clearInterval(interval.current);
    setTitle("Hit it again ➿");
    settimeLeft(25 * 60);
    interval.current = null;
    setIsrunning(false);
  };

  const minutes = padTime(Math.floor(timeleft / 60));
  const seconds = padTime(timeleft - minutes * 60);
  return (
    <div className="container">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <div className="counter">
        <div>
          <span className="time">{minutes}</span>
          <span className="attributes">Minutes</span>
        </div>
        <div>
          <span className="time">{seconds}</span>
          <span className="attributes">Seconds</span>
        </div>
      </div>
      <div className="buttons">
        {!isRunning && <button onClick={startTime}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resettimer}>Reset</button>
      </div>
    </div>
  );
}
