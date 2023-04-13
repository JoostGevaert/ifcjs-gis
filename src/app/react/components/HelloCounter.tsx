"use client";

import { useEffect, useState } from "react";
import styles from "./components.module.css";

export default function HelloCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter updated to " + count);
  }, [count])
  

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <>
    <span className={`${styles.flex} ${styles.flexCol}`}>
      <button className={`${styles.button} ${styles.mb2}`} onClick={increaseCount}>
        Increase Count
      </button>
      <button className={styles.button} onClick={decreaseCount}>
        Decrease Count
      </button>
    </span>
    <span>Count = {count}</span>
    </>
  );
}
