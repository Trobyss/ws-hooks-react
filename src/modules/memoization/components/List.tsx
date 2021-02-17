import { useEffect } from "react";

interface ElementProps {
  id: number;
  selected: boolean;
  handleSelected(id: number): void;
}

export const ListElement: React.FC<ElementProps> = (props) => {
  useEffect(() => {
    console.log(`Render ${props.id}`);
  }, [props]);

  return (
    <li onClick={() => props.handleSelected(props.id)}>
      {props.id} - {props.selected ? "Oui" : "Non"}
    </li>
  );
};
