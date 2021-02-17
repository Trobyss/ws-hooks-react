import { useCustomHooks } from "./hooks/useCustomHooks";

export const CustomHooksPage = () => {
  const { error, loading, response, retry } = useCustomHooks();

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return (
      <div>
        {error} <br />
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      {response} <br />
      <button onClick={retry}>Retry</button>
    </div>
  );
};
