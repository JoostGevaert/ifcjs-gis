"use client";

export default function HelloButton({ name }: { name: string }) {
  const clickHandler = () => {
    alert(`Watch out ${name}!`);
  };
  return <button className="" onClick={clickHandler}>Watch out!</button>;
}
