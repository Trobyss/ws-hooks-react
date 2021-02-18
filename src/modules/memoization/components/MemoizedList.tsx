import React, { useEffect } from "react";

interface ElementProps {
  id: number;
  selected: boolean;
  handleSelected(id: number): void;
}

// Use React.Memo
/**
 * React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result
 */
export const ListElementMemoized: React.FC<ElementProps> = React.memo(
  (props) => {
    useEffect(() => {
      console.log(`Render Memo ${props.id}`);
    }, [props]);

    return (
      <li onClick={() => props.handleSelected(props.id)}>
        {props.id} - {props.selected ? "Oui" : "Non"}
      </li>
    );
  }
);
