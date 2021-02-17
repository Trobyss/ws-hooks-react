import { useCallback, useState } from "react";
import { ListElement } from "./components/List";
import { ListElementMemoized } from "./components/MemoizedList";

const Arr = Array(5000).fill(0);

export const MemoizationPage = () => {
  const [selected, setSelected] = useState<number>();

  const handleSelected = useCallback(
    (id: number) => {
      setSelected(id);
    },
    [setSelected]
  );

  return (
    <ul>
      {Arr.map((_arr, index) => (
        <ListElementMemoized
          handleSelected={handleSelected}
          selected={selected === index}
          key={index}
          id={index}
        />
      ))}
    </ul>
  );

  // const handleSelected = (id: number) => {
  //   setSelected(id);
  // };

  // return (
  //   <ul>
  //     {Arr.map((_arr, index) => (
  //       <ListElement
  //         handleSelected={handleSelected}
  //         selected={selected === index}
  //         key={index}
  //         id={index}
  //       />
  //     ))}
  //   </ul>
  // );
};
