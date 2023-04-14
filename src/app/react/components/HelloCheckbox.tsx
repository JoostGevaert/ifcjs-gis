"use client";

export default function HelloCheckbox() {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    alert(`You changed the value of the checkbox to ${event.target.checked}`);
  };
  return (
    <div className="">
        <input type="checkbox" onChange={changeHandler} />
        Change me 🤩
    </div>
  );
}
