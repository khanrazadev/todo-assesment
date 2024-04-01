import { createSlice } from "@reduxjs/toolkit";

// Load initial state from local storage
const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(...action.payload);
    },
    addTodo: (state, action) => {
      const { id, title, description, completed } = action.payload;
      state.push({ id, title, description, completed });
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      const newState = state.filter((todo) => todo.id !== todoId);
      state.splice(0, state.length, ...newState); // Clear and update state
    },
    updateTodo: (state, action) => {
      const { id, title, description } = action.payload;
      const todoId = state.findIndex((todo) => todo.id === id);
      if (todoId !== -1) {
        state[todoId].title = title;
        state[todoId].description = description;
      }
    },
    completedTodo: (state, action) => {
      const todoId = action.payload;
      const todo = state.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = true;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, completedTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
