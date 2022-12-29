import { useState } from "react";

import { CheckCircle, Circle, Trash } from "phosphor-react";
import {
  Container,
  Info,
  IconButtonCheck,
  IconButtonTrash,
  Title
} from './styles';
import { Todo } from "../../pages/Home";

type PropsItem = {
  todo: Todo;
  onCheck: (item: Todo, check: boolean) => void;
  onRemove: (item: Todo) => void;
}

export function Item({
  todo,
  onCheck,
  onRemove
}: PropsItem) {
  const [check, setIsCheck] = useState<boolean>(true);

  const handleCheck = () => {
    setIsCheck((oldState) => !oldState);
    onCheck(todo, check);
  }

  return (
    <Container>
      <Info>
        <IconButtonCheck
          isChecked={todo.concluded}
          onClick={handleCheck}>
          {todo.concluded ?
            <CheckCircle
              size={24}
              weight='fill' /> :
            <Circle size={24} />
          }
        </IconButtonCheck>
        <Title isChecked={todo.concluded}>
          {todo.title}
        </Title>
      </Info>
      <IconButtonTrash onClick={() => onRemove(todo)}>
        <Trash size={15} />
      </IconButtonTrash>
    </Container>
  )
}