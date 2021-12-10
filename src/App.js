import { useState } from "react";
import "./App.css";
export default function App() {
  const [title, setTitle] = useState("Start your 25 minute Goal now");

  return (
    <div className="container">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <div className="counter">
        <div>
          <p>
            <span className="time">25</span>
            <span className="attributes">Minutes</span>
          </p>
        </div>
        <div>
          <p>
            <span className="time">60</span>
            <span className="attributes">Seconds</span>
          </p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => setTitle("hey")}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
