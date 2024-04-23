import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";
import SurveyDialogMenuItem from "@/components/Menus/SurveyDialogMenu/SurveyDialogMenuItem";
import { ENDPOINT } from "@/constants/endpoint";
import { useTodo } from "@/contexts/TodoContext";
import DeleteTaskDialog from "@/features/Dialogs/DeleteTaskDialog";
import TaskDialog from "@/features/Dialogs/TaskDialog";
import { useListTodos, useUpdateTodoItem } from "@/services/todos";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "sonner";

const SurveyDialogMenu = () => {
  const {
    todo: { todoId, todoItemId },
    clearTodo,
  } = useTodo();
  const queryClient = useQueryClient();

  const { data } = useListTodos();

  const { mutate } = useUpdateTodoItem();

  const targetTodoIds = useMemo(() => {
    if (data) {
      const index = data?.findIndex((item) => item.id === todoId);

      const leftTodoId = index === 0 ? null : data[index - 1].id;
      const rightTodoId = index === data.length - 1 ? null : data[index + 1].id;

      return {
        leftTodoId,
        rightTodoId,
      };
    }
  }, [data, todoId]);

  const handleUpdateTodoItem = (type: "left" | "right") => {
    const targetTodoId =
      type === "left"
        ? (targetTodoIds?.leftTodoId as number)
        : (targetTodoIds?.rightTodoId as number);

    mutate(
      {
        target_todo_id: targetTodoId,
        todoId: todoId!,
        todoItemId: todoItemId!,
      },
      {
        onSuccess: () => {
          toast.success("Todo item has been moved successfully");
          queryClient.invalidateQueries({
            queryKey: [`${ENDPOINT.TODOS}/${todoId}/items`],
          });
          queryClient.invalidateQueries({
            queryKey: [`${ENDPOINT.TODOS}/${targetTodoId}/items`],
          });
          clearTodo();
        },
        onError: () => {
          toast.error("Failed moving todo item");
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {targetTodoIds?.rightTodoId && (
        <SurveyDialogMenuItem
          title="Move Right"
          icon={<ArrowRightIcon />}
          variant="primary"
          onClick={() => handleUpdateTodoItem("right")}
        />
      )}

      {targetTodoIds?.leftTodoId && (
        <SurveyDialogMenuItem
          title="Move Left"
          icon={<ArrowLeftIcon />}
          variant="primary"
          onClick={() => handleUpdateTodoItem("left")}
        />
      )}

      <TaskDialog isEdit />

      <DeleteTaskDialog />
    </div>
  );
};

export default SurveyDialogMenu;
