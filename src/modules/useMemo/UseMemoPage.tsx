import { useMemo, useState } from "react";

const veryExpensiveCalcul = (number: number) => {
  return Array(number)
    .fill(0)
    .map((i) => Math.random() * Math.exp(i * Math.PI));
};

export const UseMemoPage = () => {
  const [number, setNumber] = useState<number>(5);
  const [rerender, setRerender] = useState<boolean>(false);

  const result = useMemo(() => {
    return number;
  }, []);

  const expensive = useMemo(() => veryExpensiveCalcul(number), [number]);

  // const result = () => {
  //   return number;
  // };

  return (
    <div>
      <pre>{JSON.stringify(expensive)}</pre>
      with {number} <br />
      {/* memo: {result()} with {number} <br /> */}
      <button onClick={() => setNumber((prev) => prev + 100000)}>
        Add 10 000 to number
      </button>
      <br />
      boolean :{rerender ? "true" : "false"} <br />
      <button onClick={() => setRerender((prev) => !prev)}>Re-render</button>
    </div>
  );
};
