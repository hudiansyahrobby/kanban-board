import React, { createContext, useContext, useState } from "react";

type TTodoContext = {
  todoId: number | null;
  todoItemId: number | null;
  setTodoId: (todoId: number | null) => void;
  setTodoItemId: (todoId: number | null) => void;
};

const TodoContext = createContext<TTodoContext>({} as TTodoContext);

const initialState: TTodoContext = {
  todoId: null,
  todoItemId: null,
  setTodoId: () => {},
  setTodoItemId: () => {},
};

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todo, setTodo] = useState(initialState);

  const setTodoId = (todoId: number | null) => {
    setTodo({
      ...todo,
      todoId,
    });
  };

  const setTodoItemId = (todoItemId: number | null) => {
    setTodo({
      ...todo,
      todoItemId,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todoId: todo.todoId,
        todoItemId: todo.todoId,
        setTodoId,
        setTodoItemId,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const state = useContext(TodoContext);

  if (!state) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return state;
}
