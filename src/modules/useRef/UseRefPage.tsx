import { useEffect, useRef, useState } from "react";

/**
 * useRef = mutable, returned object will persist for the full lifetime of the component
 * Mutating the .current property doesn’t cause a re-render
 * useState = immutable
 */

export const UseRefPageBad = () => {
  const [condition, setCondition] = useState<boolean>(false);
  let interval: NodeJS.Timeout;

  useEffect(() => {
    if (!condition) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(() => {
        console.log("Interval");
      }, 1000);
    }

    if (condition) {
      clearInterval(interval);
      console.log("Clear interval");
    }
  }, [condition]);

  return (
    <div>
      <button onClick={() => setCondition(true)}>Clear ref</button>
    </div>
  );
};

export const UseRefPageGood = () => {
  const [condition, setCondition] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!condition) {
      timerRef.current = setInterval(() => {
        console.log("Interval");
      }, 1000);
    }

    if (condition) {
      // @ts-ignore
      clearInterval(timerRef.current);
      console.log("Clear interval");
    }
  }, [condition]);

  return (
    <div>
      <button onClick={() => setCondition(true)}>Clear ref</button>
    </div>
  );
};

export const UseRefBadCounter = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter((prev) => prev + 1);
  });

  return <h1>{`The component has been re-rendered ${counter} times`}</h1>;
};

export const UseRefGoodCounter = () => {
  const counter = useRef(1);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <h1>{`The component has been re-rendered ${counter.current} times`}</h1>
  );
};
