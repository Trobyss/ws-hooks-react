/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { App } from "../../pages";
import { CustomHooksPage } from "../customHooks/CustomHooksPage";
import { MemoizationPage } from "../memoization";
import { UseCallbackPage } from "../useCallback/UseCallbackPage";
import { UseEffectPage, UseEffectBadly } from "../useEffect";
import { UseMemoPage } from "../useMemo/UseMemoPage";
import {
  UseRefBadCounter,
  UseRefGoodCounter,
  UseRefPageBad,
  UseRefPageGood,
} from "../useRef/UseRefPage";
import { UseStatePage } from "../useState/UseStatePage";

export enum Routes {
  HOME = "/",
  USE_CALLBACK = "/callback",
  USE_CUSTOM = "/custom",
  USE_EFFECT = "/effect",
  USE_MEMO = "/memo",
  USE_REF = "/ref",
  USE_STATE = "/state",
  MEMOIZATION = "/memoization",
}

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME} component={App} />
        <Route exact path={Routes.USE_STATE} component={UseStatePage} />
        <Route exact path={Routes.USE_EFFECT} component={UseEffectPage} />
        {/* <Route exact path={Routes.USE_EFFECT} component={UseEffectBadly} /> */}
        <Route exact path={Routes.USE_CALLBACK} component={UseCallbackPage} />
        <Route exact path={Routes.USE_CUSTOM} component={CustomHooksPage} />

        {/* <Route exact path={Routes.USE_REF} component={UseRefPageBad} /> */}
        <Route exact path={Routes.USE_REF} component={UseRefPageGood} />
        {/* <Route exact path={Routes.USE_REF} component={UseRefBadCounter} /> */}
        {/* <Route exact path={Routes.USE_REF} component={UseRefGoodCounter} /> */}
        <Route exact path={Routes.USE_MEMO} component={UseMemoPage} />
        <Route exact path={Routes.MEMOIZATION} component={MemoizationPage} />
      </Switch>
    </BrowserRouter>
  );
}
