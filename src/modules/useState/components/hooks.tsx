import { useState } from "react";

interface State {
  click: number;
}

export const UseStateHooksPage = () => {
  const [state, setState] = useState<State>({ click: 0 });

  return (
    <div>
      <button onClick={() => setState((prev) => ({ click: prev.click + 1 }))}>
        Increment Increment with hooks
      </button>
      <div>{state.click}</div>
    </div>
  );
};
