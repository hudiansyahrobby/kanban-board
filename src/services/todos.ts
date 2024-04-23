import { ENDPOINT } from "@/constants/endpoint";
import { API } from "@/libs/axiosInstance";
import {
  TCreateTodoItemReq,
  TCreateTodoReq,
  TUpdateTodoItemReq,
} from "@/types/requests/todos";
import { TTodo, TTodoItem } from "@/types/responses/todos";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useListTodos = () => {
  return useQuery({
    queryKey: [ENDPOINT.TODOS],
    queryFn: () => API.get<TTodo[]>(ENDPOINT.TODOS),
    select: (data) => data.data,
  });
};

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: (newTodo: TCreateTodoReq) => {
      return API.post<AxiosResponse<TTodo>>(ENDPOINT.TODOS, newTodo);
    },
  });
};

export const useListTodoItems = (id: number) => {
  return useQuery({
    queryKey: [`${ENDPOINT.TODOS}/${id}/items`],
    queryFn: () => API.get<TTodoItem[]>(`${ENDPOINT.TODOS}/${id}/items`),
    select: (data) => data.data,
    enabled: !!id,
  });
};

export const useCreateTodoItem = (todoId: number) => {
  return useMutation({
    mutationFn: (newTodoItem: TCreateTodoItemReq) => {
      return API.post<TTodo>(`${ENDPOINT.TODOS}/${todoId}/items`, newTodoItem);
    },
  });
};

export const useUpdateTodoItem = () => {
  return useMutation({
    mutationFn: ({ todoId, todoItemId, ...todoItem }: TUpdateTodoItemReq) => {
      return API.patch<TTodo>(
        `${ENDPOINT.TODOS}/${todoId}/items/${todoItemId}`,
        todoItem
      );
    },
  });
};

export const useDeleteTodoItem = () => {
  return useMutation({
    mutationFn: ({
      todoId,
      todoItemId,
    }: {
      todoId: number;
      todoItemId: number;
    }) => {
      return API.delete<null>(
        `${ENDPOINT.TODOS}/${todoId}/items/${todoItemId}`
      );
    },
  });
};
