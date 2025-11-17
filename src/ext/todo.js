import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;


//
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleComplete } from "./todoSlice";

const TodoApp = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        value={text}
        placeholder="Enter todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(text))}>Add</button>

      <ul>
        {todos.map((t) => (
          <li
            key={t.id}
            onClick={() => dispatch(toggleComplete(t.id))}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {t.text}

            <button
              onClick={() => dispatch(deleteTodo(t.id))}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
