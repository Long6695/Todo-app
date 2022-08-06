import React  from 'react';
import useStore, {ToDoProp, ToDosProps} from '../zustand/store';

import Todo from './Todo';

interface Props {
  todos: ToDosProps;
}

const TodoList = ({todos}: Props) => {
  const { updateTodo} = useStore();

  const handleUpdateTodo = async (id: string, text: string, isCompleted: boolean) => {
    await updateTodo(id, {_id: id, text, isCompleted});
  };

  return (
    <>
      {todos?.data?.map(value => {
        const isChecked = value.isCompleted;

        return (
          <Todo
            onUpdateTodo={handleUpdateTodo}
            isChecked={isChecked}
            data={value}
          />
        );
      })}
    </>
  );
};

export default TodoList;
