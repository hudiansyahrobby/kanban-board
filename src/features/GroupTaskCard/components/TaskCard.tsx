import React, { CSSProperties } from "react";
import ProgressBar from "@/components/ProgressBar";
import SettingSurveyDialogMenu from "@/features/GroupTaskCard/components/SettingSurveyDialogMenu";
import { cn } from "@/libs/utils";
import { useTodo } from "@/contexts/TodoContext";
import { useDraggable } from "@dnd-kit/core";

interface TaskCardProps {
  title?: string;
  progress?: number;
  todoItemId?: number;
  todoId?: number;
  className?: string;
  isEmpty?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  progress,
  title,
  className,
  isEmpty,
  todoItemId,
  todoId,
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: `${todoId}-${todoItemId}`,
    });

  const style = transform
    ? ({
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } as CSSProperties)
    : undefined;

  const { setTodo } = useTodo();

  const dragProps = isEmpty
    ? {}
    : {
        ref: setNodeRef,
        style,
        ...listeners,
        ...attributes,
      };

  return (
    <div
      className={cn(
        "border border-black-100 rounded-[4px] bg-black-400 w-[298px] relative",
        isDragging ? "z-50" : "z-10",
        isEmpty ? "py-2 px-4" : "p-4",
        className
      )}
      {...dragProps}
    >
      {isEmpty ? (
        <h2 className="text-sm leading-6 text-black-500">No Task</h2>
      ) : (
        <>
          <h2 className="font-bold text-sm leading-6 pb-2 mb-2 border-b border-dashed border-black-100">
            {title}
          </h2>

          <div className="flex justify-between gap-4">
            <ProgressBar
              value={progress}
              containerClassName="grow-0 shrink-0 basis-[216px]"
            />

            <SettingSurveyDialogMenu
              handleClick={() => {
                setTodo({
                  todoId: todoId!,
                  todoItemId: todoItemId!,
                  name: title || "",
                  progress: progress || null,
                });
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
