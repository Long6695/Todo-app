import * as React from 'react';
import {Container, Box, Typography, Button, TextField, List, CircularProgress, Alert, Snackbar} from '@mui/material';
import useStore from './zustand/store';
import TodoList from './components/TodoList';

const App = () => {
  const {todos, loading, fetchTodos, createTodo} = useStore();
  const [todo, setTodo] = React.useState('');

  React.useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddToDo = () => {
    createTodo(todo);
    setTodo('');
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <Container maxWidth="xl" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
      <Box
        bgcolor="backgroundContainer.main"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        borderRadius={4}
        gap={2}
        p={2}
      >
        <Box gridColumn="span 12">
          <Typography variant="h4" color="color.main" textAlign="center">
            Todo List
          </Typography>
        </Box>
        <Box gridColumn="span 8">
          <TextField variant="filled" label="Todo" value={todo} onChange={handleChangeText} />
        </Box>
        <Box gridColumn="span 4">
          <Button sx={{height: '100%'}} variant="contained" onClick={handleAddToDo}>
            Add
          </Button>
        </Box>
        <Box gridColumn="span 12">
          <List>
            {loading ? (
              <Box sx={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <CircularProgress />
              </Box>
            ) : (
              <TodoList todos={todos} />
            )}
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
