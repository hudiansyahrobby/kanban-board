export type TCreateTodoReq = {
  title: string;
  description: string;
};

export type TCreateTodoItemReq = {
  name: string;
  progress_percentage: number;
};

export type TUpdateTodoItemReq = {
  target_todo_id: number;
  name?: string;
  progress_percentage?: number;
  todoId: number;
  todoItemId: number;
};
