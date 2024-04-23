import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import Badge from "@/components/Badge";
import TaskCard from "./components/TaskCard";
import TaskDialog from "../Dialogs/TaskDialog";
import { useListTodoItems } from "@/services/todos";
import { LoadingIcon } from "@/components/Icons";
import { useTodo } from "@/contexts/TodoContext";
import { useDroppable } from "@dnd-kit/core";

const groupTaskCardVariants = cva("p-4 border rounded-[4px]", {
  variants: {
    variant: {
      primary: "border-primary bg-primary-50",
      success: "border-success bg-success-50",
      danger: "border-danger bg-danger-50",
      warning: "border-warning bg-warning-50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface GroupTaskCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof groupTaskCardVariants> {
  description: string;
  title: string;
  todoId: number;
}

const GroupTaskCard = ({
  className,
  variant,
  description,
  title,
  todoId,
  ...props
}: GroupTaskCardProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: todoId,
  });

  const { data, isFetching } = useListTodoItems(todoId);

  const { todo, setTodo } = useTodo();

  return (
    <div
      className={cn(
        groupTaskCardVariants({ variant }),
        "flex flex-col gap-3 items-start w-[326px] shrink-0 grow-0 h-fit",
        isOver ? "bg-white" : "",
        className
      )}
      ref={setNodeRef}
      {...props}
    >
      <Badge variant={variant}>{title}</Badge>

      <h2 className="font-bold text-xs leading-5 text-black-50">
        {description}
      </h2>

      {isFetching ? (
        <LoadingIcon className="animate-spin text-primary mx-auto" />
      ) : data && data?.length > 0 ? (
        data?.map((item) => (
          <TaskCard
            key={item.id}
            todoItemId={item.id}
            title={item.name}
            progress={item.progress_percentage || 0}
            todoId={todoId}
          />
        ))
      ) : (
        <TaskCard isEmpty />
      )}

      <TaskDialog
        handleClick={() =>
          setTodo({
            ...todo,
            todoId,
          })
        }
      />
    </div>
  );
};

export default GroupTaskCard;
