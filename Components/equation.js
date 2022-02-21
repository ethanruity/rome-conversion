import React, { useState } from "react";
import styles from "../styles/equation.module.css";

export default function Equation({ symbol }) {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [result, setResult] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/equationHandler", {
      method: "POST",
      body: JSON.stringify({ numberOne, numberTwo, symbol }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setResult(data.result);
  };

  const handleConvert = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/conversionHandler", {
      method: "POST",
      body: JSON.stringify({ input: result }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <>
      <div className={styles.problem}>
        <input
          type="text"
          placeholder="Value One"
          className={styles.num}
          onChange={(e) => setNumberOne(e.target.value)}
        />
        <p className={styles.symbol}>{symbol}</p>
        <input
          type="text"
          placeholder="Value Two"
          className={styles.num}
          onChange={(e) => setNumberTwo(e.target.value)}
        />
        <button className={styles.btn} onClick={handleSubmit}>
          Compute
        </button>
        <span className={styles.result}>{result}</span>
        {result && (
          <button className={styles.swap} onClick={handleConvert}>
            &#8593;&#8595;
          </button>
        )}
      </div>
    </>
  );
}
