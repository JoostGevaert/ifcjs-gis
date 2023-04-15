"use client";

import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function HelloCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter updated to " + count);
  }, [count]);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="mt-4 flex flex-col items-center">
      <Button onClick={increaseCount}>
        Count +1
      </Button>
      <p className="my-1">Count = {count}</p>
      <Button onClick={decreaseCount}>
        Count -1
      </Button>
    </div>
  );
}
