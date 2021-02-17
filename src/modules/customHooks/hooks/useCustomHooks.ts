import { useEffect, useState } from "react";

interface UseCustomHooksInterface {
  loading: boolean;
  response: string | null;
  error: string | null;
  retry(): Promise<void>;
}

export function useCustomHooks(): UseCustomHooksInterface {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const init = async () => {
    setLoading(true);
    setResponse(null);
    setError(null);
    try {
      const res = await new Promise<string>((res, rej) =>
        Math.random() > 0.5
          ? setTimeout(() => res("Response true"), 2000)
          : setTimeout(() => rej("Response false"), 2000)
      );
      setResponse(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return { loading, response, error, retry: init };
}
