import React  from 'react';
import useStore, {ToDosProps} from '../zustand/store';

import Todo from './Todo';

interface Props {
  todos: ToDosProps;
}

const TodoList = ({todos}: Props) => {
  const { updateTodo, deleteTodo} = useStore();

  const handleUpdateTodo = async (id: string, text: string, isCompleted: boolean) => {
    await updateTodo(id, {_id: id, text, isCompleted});
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id)
  }

  return (
    <>
      {todos?.data?.map(value => {
        const isChecked = value.isCompleted;

        return (
          <Todo
            key={value._id}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
            isChecked={isChecked}
            data={value}
          />
        );
      })}
    </>
  );
};

export default TodoList;
