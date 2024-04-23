import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import Button from "@/components/Button";
import { DialogClose, DialogFooter } from "@/components/Dialog";
import FormErrorMessage from "@/components/Form/FormErrorMessage";
import FormLabel from "@/components/Form/FormLabel";
import TextInput from "@/components/Inputs/TextInput";
import { formatPercentage } from "@/libs/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ITaskInput, taskValidation } from "../config";
import { useCreateTodoItem, useUpdateTodoItem } from "@/services/todos";
import { toast } from "sonner";
import { useTodo } from "@/contexts/TodoContext";
import { useQueryClient } from "@tanstack/react-query";
import { ENDPOINT } from "@/constants/endpoint";

interface TaskFormProps {
  isEdit?: boolean;
  onSuccess: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ isEdit, onSuccess }) => {
  const {
    todo: { todoId, todoItemId, name, progress },
    clearTodo,
  } = useTodo();
  const queryClient = useQueryClient();

  const {
    control,
    formState: { isValid, isDirty, errors },
    handleSubmit,
    reset,
  } = useForm<ITaskInput>({
    resolver: zodResolver(taskValidation),
    mode: "onChange",
    defaultValues: {
      name: "",
      progress_percentage: "",
    },
  });

  useEffect(() => {
    if (isEdit) {
      reset({
        name,
        progress_percentage: progress
          ? `${formatPercentage(progress.toString())}`
          : "",
      });
    }
  }, [name, progress, isEdit, reset]);

  const { mutate: createTodoItem, isPending: isCreateTodoItemLoading } =
    useCreateTodoItem(todoId!);

  const { mutate: updateTodoItem, isPending: isUpdateTodoItemLoading } =
    useUpdateTodoItem();

  const onSubmit = handleSubmit(({ name, progress_percentage }) => {
    if (isEdit) {
      updateTodoItem(
        {
          name,
          progress_percentage: Number(progress_percentage.replace("%", "")),
          target_todo_id: todoId!,
          todoId: todoId!,
          todoItemId: todoItemId!,
        },
        {
          onSuccess: () => {
            toast.success("Todo item has been updated successfully");
            onSuccess();
            queryClient.invalidateQueries({
              queryKey: [`${ENDPOINT.TODOS}/${todoId}/items`],
            });
            clearTodo();
          },
          onError: () => {
            toast.error("Failed updating todo item");
          },
        }
      );
    } else {
      createTodoItem(
        {
          name,
          progress_percentage: Number(progress_percentage.replace("%", "")),
        },
        {
          onSuccess: async () => {
            toast.success("New todo item has been created successfully");
            onSuccess();
            queryClient.invalidateQueries({
              queryKey: [`${ENDPOINT.TODOS}/${todoId}/items`],
            });
            clearTodo();
          },
          onError: () => {
            toast.error("Failed creating new todo item");
          },
        }
      );
    }
  });

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-2">
              <FormLabel htmlFor={field.name}>Task Name</FormLabel>
              <TextInput placeholder="Type your Task" {...field} />
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </div>
          );
        }}
      />

      <Controller
        control={control}
        name="progress_percentage"
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-2">
              <FormLabel htmlFor={field.name}>Progress</FormLabel>
              <TextInput
                className="w-[143px]"
                {...field}
                placeholder="70%"
                onChange={(e) =>
                  field.onChange(formatPercentage(e.target.value))
                }
                onKeyDown={(e) => {
                  if (e.key == "Backspace") {
                    field.onChange(field.value.replace("%", ""));
                  }
                }}
              />
              <FormErrorMessage>
                {errors?.progress_percentage?.message}
              </FormErrorMessage>
            </div>
          );
        }}
      />

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </DialogClose>

        <Button
          type="submit"
          disabled={
            !isValid ||
            !isDirty ||
            isCreateTodoItemLoading ||
            isUpdateTodoItemLoading
          }
          isLoading={isCreateTodoItemLoading || isUpdateTodoItemLoading}
        >
          Save Task
        </Button>
      </DialogFooter>
    </form>
  );
};

export default TaskForm;
