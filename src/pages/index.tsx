import { Link } from "react-router-dom";
import { Routes } from "../modules/navigation/AppRouter";

export function App() {
  return (
    <div>
      React Hooks
      <ul>
        <li>
          <Link to={Routes.USE_STATE}>Use State</Link>
        </li>
        <li>
          <Link to={Routes.USE_EFFECT}>Use Effect</Link>
        </li>
        <li>
          <Link to={Routes.USE_CALLBACK}>Callback</Link>
        </li>
        <li>
          <Link to={Routes.USE_CUSTOM}>Custom</Link>
        </li>
        <li>
          <Link to={Routes.USE_REF}>Ref</Link>
        </li>
        <li>
          <Link to={Routes.USE_MEMO}>Memo</Link>
        </li>
        <li>
          <Link to={Routes.MEMOIZATION}>Mémoization</Link>
        </li>
      </ul>
    </div>
  );
}
