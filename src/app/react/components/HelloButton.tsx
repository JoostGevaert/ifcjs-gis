"use client";

import Button from "@/components/Button";

export default function HelloButton({ name }: { name: string }) {
  const clickHandler = () => {
    alert(`Watch out ${name}!`);
  };
  return <Button className="mb-4" onClick={clickHandler}>Watch out!</Button>;
}
