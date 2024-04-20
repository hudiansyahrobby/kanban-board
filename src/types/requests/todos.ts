export type TCreateTodoReq = {
  title: string;
};

export type TCreateTodoItemReq = {
  name: string;
  progress_percentage: number;
};

export type TUpdateTodoItemReq = {
  target_todo_id: number;
  name: string;
};
