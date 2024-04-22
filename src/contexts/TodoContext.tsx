import React, { createContext, useContext, useState } from "react";

type TTodo = {
  todoId: number | null;
  todoItemId: number | null;
  name: string;
  progress: number | null;
};

type TTodoContext = {
  todo: TTodo;
  setTodo: React.Dispatch<React.SetStateAction<TTodo>>;
  clearTodo: () => void;
};

const TodoContext = createContext<TTodoContext>({} as TTodoContext);

const initialState: TTodo = {
  todoId: null,
  todoItemId: null,
  name: "",
  progress: null,
};

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todo, setTodo] = useState(initialState);

  const clearTodo = () => {
    setTodo({
      todoId: null,
      todoItemId: null,
      name: "",
      progress: null,
    });
  };
  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        clearTodo,
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
