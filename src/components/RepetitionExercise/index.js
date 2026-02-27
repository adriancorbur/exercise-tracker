import React, { useState } from "react";

function RepetitionExercise({ name, goBack }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={goBack}>Back</button>

      <h1>{name}</h1>

      <h2 style={{ fontSize: "60px" }}>{count}</h2>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(Math.max(0, count - 1))}>
        -1
      </button>

      <br /><br />

      <button onClick={() => setCount(0)}>
        RESET
      </button>
    </div>
  );
}

export default RepetitionExercise;