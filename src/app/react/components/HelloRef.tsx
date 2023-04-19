"use client";

import Button from "@/components/Button";
import { useRef } from "react";

export default function HelloRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="mt-4">
      <Button onClick={clickHandler}>Focus the field</Button>
      <br />
      <input ref={inputRef} type="text" className="w-32 dark:bg-gray-900"/>
    </div>
  );
}
