import { useObserver } from "mobx-react";
import { useStoreContext } from "../context";

export const WrongHomeMobx = () => {
  const store = useStoreContext();
  return  (
    <div>
      <button onClick={() => store.decrease()}>Update</button>
      count: {store.secondsPassed}
    </div>
  );
};

export const GoodHomeMobx = () => {
  const store = useStoreContext();
  return useObserver(() => (
    <div>
      <button onClick={() => store.decrease()}>Update</button>
      count: {store.secondsPassed}
    </div>
  ));
};
