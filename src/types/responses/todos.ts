export type TTodo = {
  id: number;
  title: string;
  description: string;
  created_by: string;
  created_at: string;
  updated_at: string;
};

export type TTodoItem = {
  id: number;
  name: string;
  done: boolean;
  todo_id: number;
  created_at: string;
  updated_at: string;
  progress_percentage: number;
};
