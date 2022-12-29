import { useCallback, useMemo, useState } from 'react';

import Logo from '../../assets/Logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  Form,
  Content,
  IndicatorContent,
  IndicatorText,
  IndicatorCount,
  ContentList
} from './styles';
import { Item } from '../../components/Item';
import { uuid } from '../../utils/generateID';

export type Todo = {
  id: string;
  title: string;
  concluded: boolean;
}

export function Home() {
  const [list, setList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string | undefined>('');

  const handleCheck = useCallback((item: Todo, check: boolean) => {
    if (list.length > 0) {
      const newTodo = list.map((listTodo) => {
        if (listTodo.id === item.id) {
          return { id: listTodo.id, title: listTodo.title, concluded: check };
        }
        return listTodo;
      })
      setList(newTodo);
    }

  }, [list]);

  const handleCreate = () => {
    event?.preventDefault();
    if (todo && todo?.length > 0) {
      setList([...list, {
        id: uuid(),
        concluded: false,
        title: todo,
      }]);

      setTodo('');
    }
  }

  const handleRemove = useCallback((item: Todo) => {
    if (list.length > 0) {
      const findItemForRemove = list.filter((itemTodo) => itemTodo.id !== item.id);

      setList(findItemForRemove);
    }
  }, [list]);

  const tasksConcluded = useMemo(() => list.filter((todo) => todo.concluded === true).length, [list]);

  const countConcluded = () => {
    if (list.length > 0) {
      return `${tasksConcluded} de ${list.length}`;
    }
    return tasksConcluded;
  }

  return (
    <>
      <Header>
        <img src={Logo} alt="Logo" />
      </Header>
      <Container>
        <Form onSubmit={handleCreate}>
          <Input
            name="new_todo"
            placeholder='Adicione uma nova tarefa'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            title='Criar'
          />
        </Form>
        <Content>
          <IndicatorContent>
            <IndicatorText>
              Tarefas criadas
              <IndicatorCount>
                {list.length}
              </IndicatorCount>
            </IndicatorText>
          </IndicatorContent>
          <IndicatorContent>
            <IndicatorText isPurple>
              Concluídas
              <IndicatorCount>
                {countConcluded()}
              </IndicatorCount>
            </IndicatorText>
          </IndicatorContent>
        </Content>
        <ContentList>
          {list.map((todo) => (
            <Item
              key={todo.id}
              onCheck={handleCheck}
              onRemove={handleRemove}
              todo={todo}
            />
          ))}
        </ContentList>
      </Container>
    </>
  )
}