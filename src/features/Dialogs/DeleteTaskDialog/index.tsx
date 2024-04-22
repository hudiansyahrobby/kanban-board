import Button from "@/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { ExclamationIcon, TrashIcon } from "@/components/Icons";
import SurveyDialogMenuItem from "@/components/Menus/SurveyDialogMenu/SurveyDialogMenuItem";
import { ENDPOINT } from "@/constants/endpoint";
import { useTodo } from "@/contexts/TodoContext";
import { useDeleteTodoItem } from "@/services/todos";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";

interface DeleteTaskDialogProps {}

const DeleteTaskDialog: React.FC<DeleteTaskDialogProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    todo: { todoItemId, todoId },
    clearTodo,
  } = useTodo();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useDeleteTodoItem();

  const handleDelete = () => {
    mutate(
      {
        todoId: todoId!,
        todoItemId: todoItemId!,
      },
      {
        onSuccess: () => {
          toast.success("Todo item has been deleted successfully");
          setIsOpen(false);
          queryClient.invalidateQueries({
            queryKey: [`${ENDPOINT.TODOS}/${todoId}/items`],
          });
          clearTodo();
        },
        onError: () => {
          toast.error("Failed deleting todo item");
        },
      }
    );
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <SurveyDialogMenuItem
          title="Delete"
          icon={<TrashIcon />}
          variant="danger"
        />
      </DialogTrigger>
      <DialogContent className="w-[420px]">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            <ExclamationIcon className="text-danger" /> <span>Delete Task</span>
          </DialogTitle>
          <DialogDescription>
            Are you sure want to delete this task? your action can’t be
            reverted.
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>

            <Button
              onClick={handleDelete}
              type="button"
              variant="danger"
              isLoading={isPending}
              disabled={isPending}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTaskDialog;
