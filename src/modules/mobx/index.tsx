import React from "react";
import { StoreProvider } from "./context";
import { GoodHomeMobx } from "./pages";

export const MobxPage = () => {
  return (
    <StoreProvider>
      <GoodHomeMobx />
    </StoreProvider>
  );
};
