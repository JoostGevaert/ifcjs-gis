"use client";

import styles from "./styles.module.css"

export default function HelloButton({ name }: { name: string }) {
  const clickHandler = () => {
    alert(`Watch out ${name}!`);
  };
  return <button className={styles.helloButton} onClick={clickHandler}>Watch out!</button>;
}
