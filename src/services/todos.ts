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
    queryFn: () => API.get<AxiosResponse<TTodo[]>>(ENDPOINT.TODOS),
    select: (data) => data.data?.data,
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
    queryFn: () =>
      API.get<AxiosResponse<TTodoItem[]>>(`${ENDPOINT.TODOS}/${id}/items`),
    select: (data) => data.data?.data,
  });
};

export const useCreateTodoItem = (todoId: number) => {
  return useMutation({
    mutationFn: (newTodoItem: TCreateTodoItemReq) => {
      return API.post<AxiosResponse<TTodo>>(
        `${ENDPOINT.TODOS}/${todoId}/items`,
        newTodoItem
      );
    },
  });
};

export const useUpdateTodoItem = (todoId: number, todoItemId: number) => {
  return useMutation({
    mutationFn: (todoItem: TUpdateTodoItemReq) => {
      return API.patch<AxiosResponse<TTodo>>(
        `${ENDPOINT.TODOS}/${todoId}/items/${todoItemId}`,
        todoItem
      );
    },
  });
};

export const useDeleteTodoItem = (todoId: number, todoItemId: number) => {
  return useMutation({
    mutationFn: () => {
      return API.delete<AxiosResponse<null>>(
        `${ENDPOINT.TODOS}/${todoId}/items/${todoItemId}`
      );
    },
  });
};
