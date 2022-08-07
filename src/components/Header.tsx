import {Typography, TextField, Button} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import useStore from '../zustand/store';

const Header = () => {
  const {createTodo} = useStore();

  const [todo, setTodo] = React.useState('');

  const handleAddToDo = () => {
    createTodo(todo);
    setTodo('');
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <Box
      width="100%"
      bgcolor="backgroundContainer.main"
      borderRadius={4}
      gap={1}
      p={4}
      mt={5}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
    >
      <Box>
        <Typography variant="h4" color="color.main" textAlign="left">
         Good Morning, Long!
        </Typography>
        <Typography variant="overline">
            Here is your today's briefing:
        </Typography>
        <Typography variant="h6" color="color.main" textAlign="left">
          You have <Typography variant='overline'>0 tasks</Typography> scheduled for <Typography variant='overline'>Yesterday</Typography>
        </Typography>
        <Typography variant="h6" color="color.main" textAlign="left">
          There have been <Typography variant='overline'>4 new activity items</Typography> since Yesterday
        </Typography>
      </Box>
      <Box mt={2}>
        <TextField fullWidth variant="filled" label="Todo" value={todo} onChange={handleChangeText} />
      </Box>
      <Box mt={2} >
        <Button sx={{height: '100%', width: '100%'}} variant="contained" onClick={handleAddToDo}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
