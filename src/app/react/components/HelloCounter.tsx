"use client";

import { useEffect, useState } from "react";

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
    <span className="">
      <button className="" onClick={increaseCount}>
        Increase Count
      </button>
      <button className="" onClick={decreaseCount}>
        Decrease Count
      </button>
    </span>
    <span>Count = {count}</span>
    </>
  );
}
