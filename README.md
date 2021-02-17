# Why hooks

"Hooks are a new addition to React in version 16.8 that allows you use state and other React features, like lifecycle methods, without writing a class. Hooks let you always use functions instead of having to constantly switch between functions, classes, higher-order components, and render props."

# `useMemo` vs `useCallback`

- useMemo keeps a function from being executed again if it didn’t receive a set of parameters that were previously used. It returns the results of a function. Use it when you want to prevent some heavy or costly operations from being called on each render. (enregistre le résultat)

- useCallback keep a function from being re-created again, based on a list of dependencies. It returns the function itself. Use it when you want to propagate it to child components, and prevent from a costly function from re-running. (enregistre la fonction)

# TODO

- USE_STATE ✅
- USE_EFFECT ✅
- USE_CUSTOM ✅
- USE_REF ✅
- USE_CALLBACK ✅
- USE_MEMO ✅
- MEMOIZATION
