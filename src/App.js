import { useState } from "react";
import "./App.css";

const padTime = (time) => {
  return time.toString().padStart(2, "0");
};
export default function App() {
  const [title, setTitle] = useState("Start your 25 minute Goal now");

  const [timeleft, settimeLeft] = useState(25 * 60);

  const startTime = () => {
    setInterval(() => {
      settimeLeft((timeleft) => {
        setTitle("Got Get it");
        if (timeleft >= 1) return timeleft - 1;
        return 0;
      });
    }, 1000);
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
        <button onClick={() => startTime()}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
