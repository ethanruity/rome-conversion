import React, { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
  const [input, setInput] = useState();
  const [result, setResult] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/conversionHandler", {
      method: "POST",
      body: JSON.stringify({ input }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Enter a Value"
          id="conversion"
          name="conversion"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          Convert
        </button>
      </form>

      <p className={styles.result}>{result}</p>
    </div>
  );
}
