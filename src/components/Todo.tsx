import {ListItemButton, ListItemIcon, Checkbox, ListItemText, Input, IconButton, ListItem} from '@mui/material';
import React, {useState} from 'react';
import {ToDoProp} from '../zustand/store';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

interface Props {
  onUpdateTodo: (id: string, text: string, isCompleted: boolean) => Promise<void>;
  onDeleteTodo: (id: string) => Promise<void>;
  isChecked: boolean;
  data: ToDoProp;
}

const Todo = ({isChecked, data, onUpdateTodo, onDeleteTodo}: Props) => {
  const [editTodo, setEditTodo] = useState({
    text: data.text,
    isCompleted: isChecked,
  });
  const [isEdit, setIsEdit] = useState(false);

  const {text} = data;

  const handleClickItem = async (id: string) => {
    await onUpdateTodo(id, data.text, !data.isCompleted);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(prev => ({...prev, text: e.target.value}));
  };

  const handleSaveTodo = async (id: string) => {
    await onUpdateTodo(id, editTodo.text, editTodo.isCompleted);
    setIsEdit(false);
  };

  const handleEditTodo = () => {
    setIsEdit(true);
  };

  const handleDeleteTodo = async (id: string) => {
    await onDeleteTodo(id)
  }

  return (
    <ListItem
      key={data._id}
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="comments">
            {isEdit ? <CheckIcon onClick={() => handleSaveTodo(data._id)} /> : <EditIcon onClick={handleEditTodo} />}
          </IconButton>
          <IconButton edge="end" aria-label="comments">
            <DeleteIcon onClick={() => handleDeleteTodo(data._id)}/>
          </IconButton>
        </>
      }
      disablePadding
    >
      {isEdit ? (
        <Input value={editTodo.text} onChange={handleOnChange} />
      ) : (
        <ListItemButton role={undefined} onClick={() => handleClickItem(data._id)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={isChecked}
              tabIndex={-1}
              disableRipple
              inputProps={{'aria-labelledby': data._id}}
            />
          </ListItemIcon>
          <ListItemText id={data._id} primary={text} />
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default Todo;
