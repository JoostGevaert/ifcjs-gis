"use client";

import styles from "./components.module.css"

export default function HelloButton({ name }: { name: string }) {
  const clickHandler = () => {
    alert(`Watch out ${name}!`);
  };
  return <button className={styles.button} onClick={clickHandler}>Watch out!</button>;
}
