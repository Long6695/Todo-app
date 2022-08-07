import create from 'zustand';
import {API_ROOT_URL} from '../config/app-config';
import {ENDPOINTS} from '../endpoint';
import httpRequest from '../services/httpRequest';

export interface ToDoProp {
  createdAt?: string;
  text: string;
  updatedAt?: string;
  _id: string;
  isCompleted: boolean;
}

export interface ToDosProps {
  data: ToDoProp[];
  limit: number;
  page: number;
  total: number;
}

interface Props {
  todos: ToDosProps;
  loading: boolean;
  fetchTodos: () => Promise<void>;
  updateTodo: (id: string, data: ToDoProp) => Promise<void>;
  createTodo: (text: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}

const updateTodoById = (data: ToDoProp[], updatedData: ToDoProp) => {
  return data.map(val => (val._id === updatedData._id ? updatedData : val));
};

const useStore = create<Props>(set => ({
  todos: {
    data: [],
    limit: 0,
    page: 0,
    total: 0,
  },
  loading: false,
  fetchTodos: async () => {
    set({loading: true});
    const response = await httpRequest.get(`${API_ROOT_URL}${ENDPOINTS.TODOS}`);
    const {data} = response;
    set({todos: data, loading: false});
  },
  updateTodo: async (id: string, data: ToDoProp) => {
    const response = await httpRequest.post(`${API_ROOT_URL}${ENDPOINTS.UPDATE_TODOS}`, id, data);
    if (response.data.isSuccess) {
      set(state => ({
        todos: {...state.todos, data: updateTodoById(state.todos.data, response.data.data)},
      }));
    }
  },
  createTodo: async (text: string) => {
    const response = await httpRequest.put(`${API_ROOT_URL}${ENDPOINTS.TODOS}`, {text});
    if (response.data.isSuccess) {
      set(state => ({
        todos: {...state.todos, data: [response.data.data, ...state.todos.data]},
      }));
    }
  },
  deleteTodo: async (id: string) => {
    const response = await httpRequest.delete(`${API_ROOT_URL}${ENDPOINTS.DELETE_TODOS}`, id);
    if (response.data.isSuccess) {
      set(state => ({
        todos: {...state.todos, data: state.todos.data.filter(val => val._id !== id)},
      }));
    }
  },
}));

export default useStore;
