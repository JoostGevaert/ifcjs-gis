"use client";

import styles from "./components.module.css"

export default function HelloCheckbox() {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    alert(`You changed the value of the checkbox to ${event.target.checked}`);
  };
  return (
    <div className={styles.helloCheckbox}>
        <input type="checkbox" onChange={changeHandler} />
        Change me 🤩
    </div>
  );
}
