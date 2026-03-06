import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

function App() {
  const [screen, setScreen] = useState("menu");
  const [exercise, setExercise] = useState(null);

  const exercises = [
    { name: "Running", type: "running" },
    { name: "Push Ups", type: "repetition" },
    { name: "Plank", type: "duration" }
  ];

  if (screen === "exercise") {

    if (exercise.type === "running") {
      return (
        <RunningExercise
          name={exercise.name}
          goBack={() => setScreen("menu")}
        />
      );
    }

    if (exercise.type === "repetition") {
      return (
        <RepetitionExercise
          name={exercise.name}
          goBack={() => setScreen("menu")}
        />
      );
    }

    if (exercise.type === "duration") {
      return (
        <DurationExercise
          name={exercise.name}
          goBack={() => setScreen("menu")}
        />
      );
    }

  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Main Screen</h1>

      {exercises.map((ex, i) => (
        <button
          key={i}
          onClick={() => {
            setExercise(ex);
            setScreen("exercise");
          }}
          style={{
            display: "block",
            margin: "12px auto",
            padding: "12px 30px",
            fontSize: "18px"
          }}
        >
          {ex.name}
        </button>
      ))}
    </div>
  );
}

export default App;