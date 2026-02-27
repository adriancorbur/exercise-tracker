import React, { useState, useRef } from "react";

function DurationExercise({ name, goBack }) {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);
  };

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={goBack}>Back</button>

      <h1>{name}</h1>

      <h2 style={{ fontSize: "60px" }}>
        {minutes} {secs}
      </h2>

      <button onClick={startTimer}>START</button>

      <br /><br />

      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default DurationExercise;