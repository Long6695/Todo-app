import {
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Input,
  IconButton,
  ListItem,
  Box,
  Divider,
} from '@mui/material';
import React, {useState} from 'react';
import {ToDoProp} from '../zustand/store';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CustomModal from './modal/CustomModal';
import DateBox from './DateBox';
import CompletedTaskTime from './CompletedTaskTime';
import {motion} from 'framer-motion';

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
    await onDeleteTodo(id);
  };

  const handleCloseModal = () => {
    setIsEdit(false);
  };

  return (
    <>
      <CustomModal open={isEdit} onClose={handleCloseModal}>
        <Input fullWidth value={editTodo.text} onChange={handleOnChange} />
        <CheckIcon onClick={() => handleSaveTodo(data?._id)} />
      </CustomModal>
      <motion.div
        layout
        animate={{opacity: data.isCompleted ? 0.5 : 1}}
        transition={{
          opacity: {ease: 'linear'},
          layout: {duration: 0.5},
        }}
      >
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <ListItem
            key={data?._id}
            disablePadding
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="comments" onClick={handleEditTodo}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="comments" onClick={() => handleDeleteTodo(data?._id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemButton role={undefined} onClick={() => handleClickItem(data?._id)} dense>
              <DateBox date={data?.createdAt} />

              <ListItemIcon sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Checkbox
                  edge="start"
                  checked={isChecked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{'aria-labelledby': data?._id}}
                />
              </ListItemIcon>
              <ListItemText id={data?._id} primary={text} />
            </ListItemButton>
          </ListItem>
        </Box>
      </motion.div>
      {data?.isCompleted && <CompletedTaskTime createdTime={data?.createdAt} finishedTime={data?.updatedAt} />}
      <Divider variant="fullWidth" sx={{margin: '6px 0'}} />
    </>
  );
};

export default Todo;
