import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useCallback } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

import { LoadingIcon } from "@/components/Icons";

import GroupTaskCard, { GroupTaskCardProps } from "@/features/GroupTaskCard";

import { ENDPOINT } from "@/constants/endpoint";

import { useListTodos } from "@/services/todos";
import { useUpdateTodoItem } from "@/services/todos";

const GroupTasks = () => {
  const { data, isPending } = useListTodos();

  const { mutate } = useUpdateTodoItem();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: undefined,
    })
  );

  const getVariant = useCallback(
    (index: number): GroupTaskCardProps["variant"] => {
      const variants: GroupTaskCardProps["variant"][] = [
        "primary",
        "warning",
        "danger",
        "success",
      ];

      if (index <= 3) {
        return variants[index];
      } else {
        const newIndex = index % 4;
        return variants[newIndex];
      }
    },
    []
  );

  const queryClient = useQueryClient();

  const handleDragEnd = (e: DragEndEvent) => {
    const todoIdAndItemId = (e.active?.id as string).split("-");
    const currentTodoId = Number(todoIdAndItemId[0]);
    const currentTodoItemId = Number(todoIdAndItemId[1]);

    if (!e.over || e.over.id === currentTodoId) {
      return;
    }

    const targetTodoId = e.over.id as number;

    mutate(
      {
        target_todo_id: targetTodoId!,
        todoId: currentTodoId,
        todoItemId: currentTodoItemId,
      },
      {
        onSuccess: () => {
          toast.success("Todo item has been moved successfully");
          queryClient.invalidateQueries({
            queryKey: [`${ENDPOINT.TODOS}/${currentTodoId}/items`],
          });
          queryClient.invalidateQueries({
            queryKey: [`${ENDPOINT.TODOS}/${targetTodoId}/items`],
          });
        },
        onError: () => {
          toast.error("Failed moving todo item");
        },
      }
    );
  };

  return (
    <div className="flex p-4 gap-3 max-w-[1352px] mx-auto py-6 overflow-x-auto 2xl:px-0">
      {isPending ? (
        <LoadingIcon className="mx-auto animate-spin text-primary" />
      ) : data && data?.length > 0 ? (
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
          {data.map((item, idx) => {
            return (
              <GroupTaskCard
                key={item.id}
                description={item.description}
                title={item.title}
                variant={getVariant(idx)}
                todoId={item.id}
              />
            );
          })}
        </DndContext>
      ) : (
        <h2 className="text-center mx-auto">There is no group task</h2>
      )}
    </div>
  );
};

export default GroupTasks;
