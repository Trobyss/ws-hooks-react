import React, { useEffect } from "react";

interface ElementProps {
  id: number;
  selected: boolean;
  handleSelected(id: number): void;
}

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
