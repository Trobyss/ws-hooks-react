import { useCallback, useState } from "react";

export const UseCallbackPage = () => {
  const [count, setCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(5);

  const handleCount = useCallback(() => {
    console.log({ number });
    setCount((prev) => prev + number);
  }, []);

  return (
    <div>
      {count} with {number} <br />
      <button onClick={handleCount}>Add</button>
      <button onClick={() => setNumber((prev) => prev + 5)}>
        Add 5 to number
      </button>
    </div>
  );
};
