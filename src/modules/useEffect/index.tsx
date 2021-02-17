import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../navigation/AppRouter";

export const UseEffectPage = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("Component did mount");

    return () => console.log("Component did unmount");
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
      <Link to={Routes.HOME}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export const UseEffactBadly = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("Component did mount");

    return () => console.log("Component did unmount");
  }, []);

  useEffect(() => {
    console.log("State update");
    // infinite loop
    setState((prev) => prev + 1);
  }, [state]);

  useEffect(() => {
    console.log("Render");
  });

  return (
    <div>
      <button onClick={() => setState((prev) => prev + 1)}>Increment</button>
      <div>{state}</div>
      <Link to={Routes.HOME}>
        <button>Back</button>
      </Link>
    </div>
  );
};
