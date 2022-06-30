import React, { useState } from "react";
import "./App.css";
const App = () => {
  let [number, setNumber] = useState(1);
  const handleChange = (e) => {
    setNumber((v) => (e.target.validity.valid ? e.target.value : v));
    console.log(typeof number);
  };
  return (
    <div className="container">
      <input
        type="text"
        className="input"
        pattern="[1-9]*"
        value={number}
        onChange={handleChange}
      />
      <button
        className="button"
        onClick={() => {
          setNumber(++number);
        }}
      >
        +
      </button>
      <button
        className="button"
        onClick={() => {
          if (number === 1) return;
          setNumber(--number);
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
