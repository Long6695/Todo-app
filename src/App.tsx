import * as React from 'react';
import {Container, Box, List, CircularProgress, CssBaseline} from '@mui/material';
import useStore from './zustand/store';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { motion } from 'framer-motion';

const App = () => {
  const {todos, loading, fetchTodos} = useStore();

  React.useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <motion.div animate={{ y: 12}} transition={{ease: "easeOut", duration: 4 }}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header />
        <Box
          width="100%"
          bgcolor="backgroundContainer.main"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
          mt={5}
          p={4}
          borderRadius={4}
        >
          <List>
            {loading ? (
              
              <Box sx={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <CircularProgress />
              </Box>
              // </motion.div>
            ) : (
              <TodoList todos={todos} />
            )}
          </List>
        </Box>
      </Container>
    </motion.div>
  );
};

export default App;
