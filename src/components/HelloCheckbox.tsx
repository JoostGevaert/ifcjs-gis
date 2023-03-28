"use client";

import styles from "./styles.module.css"

export default function HelloCheckbox() {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    alert(`The value of the checkbox is ${event.target.checked}`);
  };
  return (
    <div className={styles.helloCheckbox}>
        <input type="checkbox" onChange={changeHandler} />
        Change me 🤩
    </div>
  );
}
