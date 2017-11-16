import axios from 'axios';

export const getTodos = () => {
  return axios.get('/todo');
};

export const addTodo = todo => {
  return axios.post('/todo', todo);
}

export const toggleDone = todo => {
  todo = {
    ...todo,
    isDone: !todo.isDone
  };

  return axios.put(`/todo/${todo.id}`, todo);
}

export const removeTodo = id => {
  return axios.delete(`/todo/${id}`);
}