import React, { useState } from "react";

function RunningExercise({ name, goBack }) {
  const [seconds, setSeconds] = useState(0);
  const [laps, setLaps] = useState([]);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    if (!timer) {
      const newTimer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
      setTimer(newTimer);
    }
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setSeconds(0);
    setLaps([]);
  };

  const recordLap = () => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    const lapTime = minutes + ":" + secs;

    setLaps([...laps, lapTime]);
  };

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={goBack}>Back</button>

      <h1>{name}</h1>

      <h2>{minutes}:{secs}</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={recordLap}>Lap</button>
      <button onClick={resetTimer}>Reset</button>

      <h3>Laps</h3>

      {laps.map((lap, index) => (
        <p key={index}>Lap {index + 1}: {lap}</p>
      ))}
    </div>
  );
}

export default RunningExercise;