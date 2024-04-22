import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import React, { useState } from "react";
import EditTaskButton from "./components/EditTaskButton";
import NewTaskButton from "./components/NewTaskButton";
import TaskForm from "./components/TaskForm";

interface TaskDialogProps {
  isEdit?: boolean;
  handleClick?: () => void;
}

const TaskDialog: React.FC<TaskDialogProps> = ({ isEdit, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const title = isEdit ? "Edit Task" : "Create Task";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        asChild
        onClick={() => {
          handleClick?.();
          setIsOpen(true);
        }}
      >
        {isEdit ? <EditTaskButton /> : <NewTaskButton />}
      </DialogTrigger>
      <DialogContent className="w-[420px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription asChild>
            <TaskForm onSuccess={() => setIsOpen(false)} isEdit={isEdit} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
