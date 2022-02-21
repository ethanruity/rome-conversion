import React, { useState } from "react";
import Convert from "./convert";
import Equation from "./equation";
import styles from "../styles/radio.module.css";

export default function Form() {
  const [selected, setSelected] = useState("convert");

  return (
    <div>
      <div className={styles.container}>
        <label>
          <input
            className={styles.radio}
            defaultChecked
            type="radio"
            name="math"
            value="convert"
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Conversion</span>
        </label>
        <label>
          <input
            className={styles.radio}
            type="radio"
            name="math"
            value="add"
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Add</span>
        </label>
        <label>
          <input
            className={styles.radio}
            type="radio"
            name="math"
            value="subtract"
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Subtract</span>
        </label>
        <label>
          <input
            className={styles.radio}
            type="radio"
            name="math"
            value="multiply"
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Multiply</span>
        </label>
        <label>
          <input
            className={styles.radio}
            type="radio"
            name="math"
            value="divide"
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Divide</span>
        </label>
      </div>
      {selected === "convert" && <Convert />}
      {selected === "add" && <Equation symbol="+" />}
      {selected === "subtract" && <Equation symbol="-" />}
      {selected === "multiply" && <Equation symbol="*" />}
      {selected === "divide" && <Equation symbol="/" />}
    </div>
  );
}
