import { useEffect, useState } from "react";

export const Subscription = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("Component did mount");

    return () => console.log("Component did un mount");
  }, []);

  useEffect(() => {
    console.log("State update");
  }, [state]);

  useEffect(() => {
    console.log("Render");
  });

  return (
    <div>
      <button onClick={() => setState((prev) => prev + 1)}>Increment</button>
      <div>{state}</div>
    </div>
  );
};
